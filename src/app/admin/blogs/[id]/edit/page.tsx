"use client";

import React, { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { fetchOrSeedCategories } from "@/lib/categories";
import { toEditorHtml, isContentEmpty } from "@/lib/richText";
import { uploadBlogImage } from "@/lib/uploadBlogImage";
import RichTextEditor from "@/components/admin/RichTextEditor";
import Link from "next/link";
import { ArrowLeft, Upload, CheckCircle2, Image as ImageIcon, AlertCircle, Save } from "lucide-react";

export default function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const router = useRouter();

  const [loadingDoc, setLoadingDoc] = useState(true);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [category, setCategory] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [dateStr, setDateStr] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");

  const [imageUrl, setImageUrl] = useState("");
  const [imageSize, setImageSize] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imageError, setImageError] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPost() {
      try {
        const docRef = doc(db, "blogs", id);
        const snap = await getDoc(docRef);

        if (!snap.exists()) {
          setError("Blog post not found.");
          return;
        }

        const data = snap.data();
        setTitle(data.title || "");
        setSlug(data.slug || "");
        setCategory(data.category || "EDUCATION");
        setExcerpt(data.excerpt || data.desc || "");
        setContent(toEditorHtml(data.content || data.body || ""));
        setAuthor(data.author || "SparkVR Team");
        setDateStr(data.date || "");
        setImageUrl(data.image || "");
        setMetaTitle(data.metaTitle || "");
        setMetaDescription(data.metaDescription || "");
        setStatus(data.status === "published" ? "published" : "draft");
      } catch (err: any) {
        console.error("Error loading blog post:", err);
        setError("Failed to load blog post from database.");
      } finally {
        setLoadingDoc(false);
      }
    }

    loadPost();
  }, [id]);

  useEffect(() => {
    async function loadCategories() {
      try {
        const cats = await fetchOrSeedCategories();
        setCategories(cats.map((c) => c.name));
      } catch (err) {
        console.error("Error loading categories:", err);
      }
    }
    loadCategories();
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    setImageError("");

    try {
      const { url, sizeLabel } = await uploadBlogImage(file);
      setImageUrl(url);
      setImageSize(sizeLabel);
    } catch (err: any) {
      console.error("Upload error:", err);
      setImageError(err.message || "Failed to compress and upload image.");
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.SyntheticEvent, nextStatus?: "draft" | "published") => {
    e.preventDefault();
    setError("");

    if (!title || !slug || isContentEmpty(content)) {
      setError("Please fill in all required fields (Title, Slug, Content).");
      return;
    }

    setSubmitting(true);

    try {
      const docRef = doc(db, "blogs", id);
      const finalStatus = nextStatus || status;
      await updateDoc(docRef, {
        title,
        slug,
        category,
        excerpt,
        content,
        author,
        date: dateStr,
        image: imageUrl,
        metaTitle,
        metaDescription,
        status: finalStatus,
        updatedAt: serverTimestamp(),
      });

      router.push("/admin/blogs");
    } catch (err: any) {
      console.error("Error updating blog post:", err);
      setError(err.message || "Failed to update blog post.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loadingDoc) {
    return (
      <div className="min-h-[400px] flex items-center justify-center text-slate-400 text-sm font-medium font-sans">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-slate-200 border-t-blue-600 mr-3"></div>
        Loading article details...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/blogs"
            className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Edit Blog Article
            </h1>
            <p className="text-slate-500 text-sm mt-0.5">
              Update article details & replace featured image
            </p>
          </div>
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm font-medium flex items-center gap-2.5">
          <AlertCircle className="w-4.5 h-4.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Form */}
      <form onSubmit={(e) => handleSubmit(e)} className="space-y-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Article Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors text-sm"
            />
          </div>

          {/* Slug & Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                URL Slug *
              </label>
              <input
                type="text"
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors text-sm font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors text-sm"
              >
                {category && !categories.includes(category) && (
                  <option value={category}>{category}</option>
                )}
                {categories.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
              <p className="text-xs text-slate-400 mt-2">
                Need a new one?{" "}
                <Link href="/admin/categories" className="text-blue-600 hover:underline font-semibold">
                  Manage categories
                </Link>
              </p>
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as "draft" | "published")}
              className="w-full md:w-64 bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors text-sm"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Short Excerpt / Summary
            </label>
            <textarea
              rows={3}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl p-4 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors text-sm leading-relaxed"
            />
          </div>

          {/* Featured Image Upload */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Featured Image
            </label>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <label className="relative flex flex-col items-center justify-center p-8 border-2 border-dashed border-slate-300 hover:border-blue-400 rounded-2xl bg-slate-50 cursor-pointer group transition-all">
                  <Upload className="w-8 h-8 text-slate-400 group-hover:text-blue-500 mb-2.5 transition-colors" />
                  <span className="text-sm font-semibold text-slate-600">
                    {uploadingImage ? "Compressing Image..." : "Click to replace featured image"}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={uploadingImage}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </label>

                {imageError && (
                  <p className="text-xs text-red-600 mt-2 font-medium">{imageError}</p>
                )}
              </div>

              {/* Image Preview */}
              {imageUrl ? (
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex flex-col items-center space-y-2.5">
                  <img
                    src={imageUrl}
                    alt="Featured Preview"
                    className="w-full h-36 object-cover rounded-xl border border-slate-200"
                  />
                  <div className="flex items-center justify-between w-full text-xs pt-1">
                    <span className="text-slate-500 font-medium">Current Image</span>
                    {imageSize && (
                      <span className="text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                        {imageSize} (&lt; 300KB)
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl text-center text-slate-400 text-xs">
                  <ImageIcon className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  No image set
                </div>
              )}
            </div>
          </div>

          {/* Author & Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                Author Name
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                Display Date
              </label>
              <input
                type="text"
                value={dateStr}
                onChange={(e) => setDateStr(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors text-sm"
              />
            </div>
          </div>

          {/* Main Article Content */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Article Content *
            </label>
            <RichTextEditor initialContent={content} onChange={setContent} />
          </div>
        </div>

        {/* SEO */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6">
          <div>
            <h2 className="text-sm font-bold text-slate-900">SEO</h2>
            <p className="text-slate-500 text-xs mt-1">
              Basic metadata used for search engines and social sharing.
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Meta Title
            </label>
            <input
              type="text"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              placeholder="Defaults to the article title if left blank"
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Meta Description
            </label>
            <textarea
              rows={3}
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              placeholder="Defaults to the short excerpt if left blank"
              className="w-full bg-white border border-slate-300 rounded-xl p-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors text-sm leading-relaxed"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-1">
          <Link
            href="/admin/blogs"
            className="px-6 py-3 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 text-sm font-semibold transition-colors"
          >
            Cancel
          </Link>
          {status !== "draft" && (
            <button
              type="button"
              onClick={(e) => handleSubmit(e, "draft")}
              disabled={submitting || uploadingImage}
              className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-semibold text-sm px-6 py-3 rounded-xl flex items-center gap-2 cursor-pointer disabled:opacity-50 transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Unpublish to Draft</span>
            </button>
          )}
          <button
            type="submit"
            disabled={submitting || uploadingImage}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-xl flex items-center gap-2 cursor-pointer disabled:opacity-50 transition-colors"
          >
            {submitting ? (
              <span>Saving...</span>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>{status === "draft" ? "Save Draft" : "Save Changes"}</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
