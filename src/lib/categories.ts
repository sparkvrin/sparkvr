import { collection, getDocs, setDoc, deleteDoc, doc, query, orderBy, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

// Matches the categories the site already shipped with, so the blog form's
// dropdown isn't empty before anyone has visited /admin/categories.
export const DEFAULT_CATEGORIES = ["EDUCATION", "RESEARCH", "INNOVATION", "VR TECH", "CURRICULUM"];

export interface CategoryDoc {
  id: string;
  name: string;
}

// Deterministic doc ID from a category name, so seeding/creating is
// idempotent — writing the same name twice (e.g. two tabs racing the
// "seed if empty" check) overwrites the same doc instead of creating a
// duplicate.
export function slugifyCategory(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function fetchOrSeedCategories(): Promise<CategoryDoc[]> {
  const q = query(collection(db, "categories"), orderBy("name"));
  let snapshot = await getDocs(q);

  if (snapshot.empty) {
    for (const name of DEFAULT_CATEGORIES) {
      await setDoc(doc(db, "categories", slugifyCategory(name)), {
        name,
        createdAt: serverTimestamp(),
      });
    }
    snapshot = await getDocs(q);
  }

  const docs = snapshot.docs.map((d) => ({ id: d.id, name: d.data().name as string }));

  // Self-heal any pre-existing duplicate names (e.g. from an earlier race
  // before doc IDs were made deterministic) by keeping one doc per name and
  // deleting the rest.
  const seen = new Map<string, CategoryDoc>();
  const duplicates: CategoryDoc[] = [];
  for (const cat of docs) {
    const key = cat.name.trim().toLowerCase();
    if (seen.has(key)) {
      duplicates.push(cat);
    } else {
      seen.set(key, cat);
    }
  }

  if (duplicates.length > 0) {
    await Promise.all(duplicates.map((d) => deleteDoc(doc(db, "categories", d.id)).catch(() => {})));
  }

  return Array.from(seen.values());
}
