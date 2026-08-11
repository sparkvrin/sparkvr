"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { fetchOrSeedCategories } from "@/lib/categories";
import { isContentEmpty } from "@/lib/richText";
import { uploadBlogImage } from "@/lib/uploadBlogImage";
import RichTextEditor from "@/components/admin/RichTextEditor";
import Link from "next/link";
import { ArrowLeft, Upload, CheckCircle2, Image as ImageIcon, AlertCircle, Save } from "lucide-react";

export default function NewBlogPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [category, setCategory] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("SparkVR Team");
  const [dateStr, setDateStr] = useState(
    new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  );
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  const [imageUrl, setImageUrl] = useState("");
  const [imageSize, setImageSize] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imageError, setImageError] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadCategories() {
      try {
        const cats = await fetchOrSeedCategories();
        const names = cats.map((c) => c.name);
        setCategories(names);
        if (names.length > 0) setCategory((prev) => prev || names[0]);
      } catch (err) {
        console.error("Error loading categories:", err);
      }
    }
    loadCategories();
  }, []);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    const autoSlug = val
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
    setSlug(autoSlug);
  };

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

  const handleSubmit = async (e: React.SyntheticEvent, status: "draft" | "published") => {
    e.preventDefault();
    setError("");

    if (!title || !slug || isContentEmpty(content)) {
      setError("Please fill in all required fields (Title, Slug, Content).");
      return;
    }

    setSubmitting(true);

    try {
      await addDoc(collection(db, "blogs"), {
        title,
        slug,
        category,
        excerpt,
        content,
        author,
        date: dateStr,
        image: imageUrl || "/blog_vr.webp",
        metaTitle,
        metaDescription,
        status,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      router.push("/admin/blogs");
    } catch (err: any) {
      console.error("Error creating blog post:", err);
      setError(err.message || "Failed to save blog post.");
    } finally {
      setSubmitting(false);
    }
  };

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
              Create Blog Article
            </h1>
            <p className="text-slate-500 text-sm mt-0.5">
              Add a new article to SparkVR blog database
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
      <form onSubmit={(e) => handleSubmit(e, "published")} className="space-y-8">
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
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="e.g. How VR is Transforming Modern Classrooms"
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors text-sm"
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
                placeholder="vr-modern-classrooms"
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors text-sm font-mono"
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
                {categories.length === 0 && <option value="">Loading categories...</option>}
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

          {/* Excerpt */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Short Excerpt / Summary
            </label>
            <textarea
              rows={3}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Brief description shown on blog cards..."
              className="w-full bg-white border border-slate-300 rounded-xl p-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors text-sm leading-relaxed"
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
                    {uploadingImage ? "Compressing Image..." : "Click to choose feature image"}
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

              {/* Image Preview & Compressed size info */}
              {imageUrl ? (
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex flex-col items-center space-y-2.5">
                  <img
                    src={imageUrl}
                    alt="Featured Preview"
                    className="w-full h-36 object-cover rounded-xl border border-slate-200"
                  />
                  <div className="flex items-center justify-between w-full text-xs pt-1">
                    <span className="text-slate-500 font-medium">Compressed:</span>
                    <span className="text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                      {imageSize} (&lt; 300KB)
                    </span>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl text-center text-slate-400 text-xs">
                  <ImageIcon className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  No image selected yet
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
          <button
            type="button"
            onClick={(e) => handleSubmit(e, "draft")}
            disabled={submitting || uploadingImage}
            className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-semibold text-sm px-6 py-3 rounded-xl flex items-center gap-2 cursor-pointer disabled:opacity-50 transition-colors"
          >
            <Save className="w-4 h-4" />
            <span>{submitting ? "Saving..." : "Save Draft"}</span>
          </button>
          <button
            type="submit"
            disabled={submitting || uploadingImage}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-xl flex items-center gap-2 cursor-pointer disabled:opacity-50 transition-colors"
          >
            {submitting ? (
              <span>Publishing...</span>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>Publish Article</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
