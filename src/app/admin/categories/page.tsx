"use client";

import React, { useEffect, useState } from "react";
import { collection, getDocs, setDoc, updateDoc, deleteDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { fetchOrSeedCategories, slugifyCategory, type CategoryDoc } from "@/lib/categories";
import { Tag, Plus, Pencil, Trash2, Check, X, AlertCircle } from "lucide-react";

type Category = CategoryDoc;

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [blogCounts, setBlogCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [newName, setNewName] = useState("");
  const [adding, setAdding] = useState(false);
  const [error, setError] = useState("");

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");
  const [savingId, setSavingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      setCategories(await fetchOrSeedCategories());

      const blogsSnap = await getDocs(collection(db, "blogs"));
      const counts: Record<string, number> = {};
      blogsSnap.docs.forEach((d) => {
        const cat = d.data().category;
        if (cat) counts[cat] = (counts[cat] || 0) + 1;
      });
      setBlogCounts(counts);
    } catch (err) {
      console.error("Error fetching categories:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const trimmed = newName.trim();
    if (!trimmed) return;

    if (categories.some((c) => c.name.toLowerCase() === trimmed.toLowerCase())) {
      setError("A category with this name already exists.");
      return;
    }

    setAdding(true);
    try {
      await setDoc(doc(db, "categories", slugifyCategory(trimmed)), {
        name: trimmed,
        createdAt: serverTimestamp(),
      });
      setNewName("");
      await fetchCategories();
    } catch (err) {
      console.error("Error adding category:", err);
      setError("Failed to add category.");
    } finally {
      setAdding(false);
    }
  };

  const startEdit = (cat: Category) => {
    setEditingId(cat.id);
    setEditValue(cat.name);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditValue("");
  };

  const saveEdit = async (id: string) => {
    const trimmed = editValue.trim();
    if (!trimmed) return;

    if (categories.some((c) => c.id !== id && c.name.toLowerCase() === trimmed.toLowerCase())) {
      alert("A category with this name already exists.");
      return;
    }

    setSavingId(id);
    try {
      await updateDoc(doc(db, "categories", id), { name: trimmed });
      setEditingId(null);
      setEditValue("");
      await fetchCategories();
    } catch (err) {
      console.error("Error renaming category:", err);
      alert("Failed to rename category.");
    } finally {
      setSavingId(null);
    }
  };

  const handleDelete = async (cat: Category) => {
    const usageCount = blogCounts[cat.name] || 0;
    const confirmMsg =
      usageCount > 0
        ? `"${cat.name}" is used by ${usageCount} blog post${usageCount > 1 ? "s" : ""}. Deleting it only removes it from this list — those posts keep the category text. Continue?`
        : `Delete category "${cat.name}"?`;
    if (!window.confirm(confirmMsg)) return;

    setDeletingId(cat.id);
    try {
      await deleteDoc(doc(db, "categories", cat.id));
      setCategories((prev) => prev.filter((c) => c.id !== cat.id));
    } catch (err) {
      console.error("Error deleting category:", err);
      alert("Failed to delete category.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 font-sans">
      {/* Header */}
      <div className="pb-6 border-b border-slate-200">
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
          <Tag className="w-6 h-6 text-blue-600" />
          <span>Categories</span>
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Manage the categories available when creating or editing a blog post.
        </p>
      </div>

      {/* Add Category */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
        <h2 className="text-sm font-bold text-slate-900">Add New Category</h2>

        {error && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-100 text-red-700 text-xs font-medium flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleAdd} className="flex items-center gap-3">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="e.g. Parent Resources"
            className="flex-1 bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
          />
          <button
            type="submit"
            disabled={adding || !newName.trim()}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 transition-colors cursor-pointer disabled:opacity-50 shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>{adding ? "Adding..." : "Add"}</span>
          </button>
        </form>
      </div>

      {/* Category List */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="text-center py-14 text-slate-400 text-sm">
            <div className="animate-spin rounded-full h-6 w-6 border-2 border-slate-200 border-t-blue-600 mx-auto mb-3"></div>
            Loading categories...
          </div>
        ) : categories.length === 0 ? (
          <div className="text-center py-14 text-slate-400 text-sm">No categories yet.</div>
        ) : (
          <div className="divide-y divide-slate-100">
            {categories.map((cat) => (
              <div key={cat.id} className="flex items-center justify-between gap-4 px-6 py-4">
                {editingId === cat.id ? (
                  <input
                    type="text"
                    autoFocus
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") saveEdit(cat.id);
                      if (e.key === "Escape") cancelEdit();
                    }}
                    className="flex-1 bg-white border border-blue-300 rounded-lg px-3 py-1.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                ) : (
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-sm font-semibold text-slate-900 truncate">{cat.name}</span>
                    <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full shrink-0">
                      {blogCounts[cat.name] || 0} post{(blogCounts[cat.name] || 0) === 1 ? "" : "s"}
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-2 shrink-0">
                  {editingId === cat.id ? (
                    <>
                      <button
                        onClick={() => saveEdit(cat.id)}
                        disabled={savingId === cat.id}
                        className="p-2 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors cursor-pointer disabled:opacity-50"
                        title="Save"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="p-2 rounded-lg bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors cursor-pointer"
                        title="Cancel"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => startEdit(cat)}
                        className="p-2 rounded-lg bg-slate-100 text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer"
                        title="Rename"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(cat)}
                        disabled={deletingId === cat.id}
                        className="p-2 rounded-lg bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer disabled:opacity-50"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
