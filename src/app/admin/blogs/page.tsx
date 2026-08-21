"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs, deleteDoc, updateDoc, doc, query, orderBy, addDoc, serverTimestamp, deleteField } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Plus, Search, Trash2, Edit3, Eye, FileText, Clock, Download, RotateCcw, XCircle } from "lucide-react";
import { SEED_BLOGS } from "@/lib/seedBlogs";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [permissionError, setPermissionError] = useState(false);
  const [importing, setImporting] = useState(false);
  const [tab, setTab] = useState<"active" | "trash">("active");

  const fetchBlogs = async () => {
    setLoading(true);
    setPermissionError(false);
    try {
      const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setBlogs(list);
    } catch (err: any) {
      console.error("Error fetching blogs:", err);
      if (err?.code === "permission-denied") {
        setPermissionError(true);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleTrash = async (id: string, title: string) => {
    if (!window.confirm(`Move "${title}" to Trash? You can restore it later.`)) return;
    setDeletingId(id);
    try {
      await updateDoc(doc(db, "blogs", id), { trashed: true, trashedAt: serverTimestamp() });
      setBlogs((prev) => prev.map((b) => (b.id === id ? { ...b, trashed: true } : b)));
    } catch (err) {
      console.error("Error trashing blog:", err);
      alert("Failed to move blog post to trash.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleRestore = async (id: string) => {
    setDeletingId(id);
    try {
      await updateDoc(doc(db, "blogs", id), { trashed: false, trashedAt: deleteField() });
      setBlogs((prev) => prev.map((b) => (b.id === id ? { ...b, trashed: false } : b)));
    } catch (err) {
      console.error("Error restoring blog:", err);
      alert("Failed to restore blog post.");
    } finally {
      setDeletingId(null);
    }
  };

  const handlePermanentDelete = async (id: string, title: string) => {
    if (!window.confirm(`Permanently delete "${title}"? This cannot be undone.`)) return;
    setDeletingId(id);
    try {
      await deleteDoc(doc(db, "blogs", id));
      setBlogs((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      console.error("Error deleting blog:", err);
      alert("Failed to permanently delete blog post.");
    } finally {
      setDeletingId(null);
    }
  };

  const missingSeedBlogs = SEED_BLOGS.filter(
    (seed) => !blogs.some((b) => b.slug === seed.slug)
  );

  const handleImportWebsitePosts = async () => {
    if (missingSeedBlogs.length === 0) return;
    setImporting(true);
    try {
      for (const seed of missingSeedBlogs) {
        await addDoc(collection(db, "blogs"), {
          ...seed,
          status: "published",
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      }
      await fetchBlogs();
    } catch (err) {
      console.error("Error importing website posts:", err);
      alert("Failed to import one or more posts.");
    } finally {
      setImporting(false);
    }
  };

  const trashedCount = blogs.filter((b) => b.trashed).length;

  const filteredBlogs = blogs
    .filter((b) => (tab === "trash" ? b.trashed : !b.trashed))
    .filter(
      (b) =>
        b.title?.toLowerCase().includes(search.toLowerCase()) ||
        b.category?.toLowerCase().includes(search.toLowerCase()) ||
        b.slug?.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="max-w-7xl mx-auto space-y-8 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
            <FileText className="w-6 h-6 text-blue-600" />
            <span>Blog Management</span>
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Create, edit, and manage published articles.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {missingSeedBlogs.length > 0 && (
            <button
              onClick={handleImportWebsitePosts}
              disabled={importing}
              className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-semibold text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 transition-colors cursor-pointer disabled:opacity-50 w-fit"
            >
              <Download className="w-4 h-4" />
              <span>
                {importing
                  ? "Importing..."
                  : `Import ${missingSeedBlogs.length} Website Post${missingSeedBlogs.length > 1 ? "s" : ""}`}
              </span>
            </button>
          )}
          <Link
            href="/admin/blogs/new"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 transition-colors cursor-pointer w-fit"
          >
            <Plus className="w-4 h-4" />
            <span>New Blog Article</span>
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setTab("active")}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
            tab === "active"
              ? "bg-blue-600 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          Articles
        </button>
        <button
          onClick={() => setTab("trash")}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer flex items-center gap-2 ${
            tab === "trash"
              ? "bg-blue-600 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          <Trash2 className="w-4 h-4" />
          <span>Trash{trashedCount > 0 ? ` (${trashedCount})` : ""}</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title, category, or slug..."
          className="w-full bg-white border border-slate-300 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
        />
      </div>

      {permissionError && (
        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-sm leading-relaxed space-y-3">
          <p className="font-bold text-amber-900 text-base">Database Security Rules Setup Notice</p>
          <p>
            Database security rules are restricting read access. Paste the following security rules in your database settings to enable public reading and admin editing:
          </p>
          <pre className="p-4 bg-slate-900 rounded-xl text-xs text-cyan-300 font-mono overflow-x-auto">
{`rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /blogs/{blogId} {
      allow read: if true;
      allow write, delete: if request.auth != null;
    }
    match /enquiries/{enquiryId} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
  }
}`}
          </pre>
        </div>
      )}

      {/* Blog Cards / List */}
      {loading ? (
        <div className="text-center py-20 text-slate-400 text-sm font-medium">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-slate-200 border-t-blue-600 mx-auto mb-4"></div>
          Loading articles from database...
        </div>
      ) : filteredBlogs.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-16 text-center text-slate-400 space-y-3">
          {tab === "trash" ? (
            <Trash2 className="w-12 h-12 text-slate-300 mx-auto" />
          ) : (
            <FileText className="w-12 h-12 text-slate-300 mx-auto" />
          )}
          <p className="font-bold text-slate-900 text-lg">
            {tab === "trash" ? "Trash is empty" : "No blog articles found"}
          </p>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            {search
              ? "No articles match your search term."
              : tab === "trash"
              ? "Deleted articles will show up here and can be restored."
              : "Get started by publishing your first blog article."}
          </p>
          {!search && tab === "active" && (
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link
                href="/admin/blogs/new"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-5 py-2.5 rounded-xl hover:bg-blue-100 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Create First Article</span>
              </Link>
              {missingSeedBlogs.length > 0 && (
                <button
                  onClick={handleImportWebsitePosts}
                  disabled={importing}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-5 py-2.5 rounded-xl hover:bg-slate-200 transition-colors disabled:opacity-50 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>{importing ? "Importing..." : "Import Website Posts"}</span>
                </button>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredBlogs.map((b) => (
            <div
              key={b.id}
              className="bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-5 transition-colors"
            >
              <div className="flex items-start gap-5 min-w-0">
                {b.image ? (
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-24 h-24 rounded-xl object-cover border border-slate-200 shrink-0 bg-slate-50"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 text-xs font-medium shrink-0">
                    No image
                  </div>
                )}
                <div className="min-w-0 space-y-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide ${
                        b.status === "published"
                          ? "text-emerald-700 bg-emerald-50"
                          : "text-amber-700 bg-amber-50"
                      }`}
                    >
                      {b.status === "published" ? "Published" : "Draft"}
                    </span>
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                      {b.category || "UNCATEGORIZED"}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {b.date || "No date"}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug truncate">
                    {b.title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                    {b.excerpt || b.desc}
                  </p>
                  <p className="text-xs text-slate-400 font-mono pt-0.5">
                    /blog/{b.slug}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                {tab === "trash" ? (
                  <>
                    <button
                      onClick={() => handleRestore(b.id)}
                      disabled={deletingId === b.id}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold transition-colors cursor-pointer disabled:opacity-50"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Restore</span>
                    </button>
                    <button
                      onClick={() => handlePermanentDelete(b.id, b.title)}
                      disabled={deletingId === b.id}
                      className="p-2.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-colors cursor-pointer disabled:opacity-50"
                      title="Delete Permanently"
                    >
                      <XCircle className="w-4.5 h-4.5" />
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/blog/${b.slug}`}
                      target="_blank"
                      className="p-2.5 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                      title="Preview Article"
                    >
                      <Eye className="w-4.5 h-4.5" />
                    </Link>
                    <Link
                      href={`/admin/blogs/${b.id}/edit`}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold transition-colors"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </Link>
                    <button
                      onClick={() => handleTrash(b.id, b.title)}
                      disabled={deletingId === b.id}
                      className="p-2.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-colors cursor-pointer disabled:opacity-50"
                      title="Move to Trash"
                    >
                      <Trash2 className="w-4.5 h-4.5" />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
