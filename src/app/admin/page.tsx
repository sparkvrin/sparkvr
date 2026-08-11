"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { FileText, Inbox, Plus, Building2, CheckCircle2, FileEdit, Sparkles } from "lucide-react";

export default function AdminDashboardPage() {
  const [blogCount, setBlogCount] = useState<number | null>(null);
  const [publishedCount, setPublishedCount] = useState<number | null>(null);
  const [draftCount, setDraftCount] = useState<number | null>(null);
  const [enquiryCount, setEnquiryCount] = useState<number | null>(null);
  const [newEnquiryCount, setNewEnquiryCount] = useState<number | null>(null);
  const [recentBlogs, setRecentBlogs] = useState<any[]>([]);
  const [recentEnquiries, setRecentEnquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMetrics() {
      try {
        const blogsRef = collection(db, "blogs");
        const blogSnap = await getDocs(blogsRef);
        setBlogCount(blogSnap.size);

        const blogDocs = blogSnap.docs.map((d) => d.data());
        const published = blogDocs.filter((d) => d.status === "published").length;
        setPublishedCount(published);
        setDraftCount(blogSnap.size - published);

        const recentBlogsQ = query(blogsRef, orderBy("createdAt", "desc"), limit(5));
        const recentBlogsSnap = await getDocs(recentBlogsQ);
        const blogsList = recentBlogsSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setRecentBlogs(blogsList);

        const enquiriesRef = collection(db, "enquiries");
        const enquirySnap = await getDocs(enquiriesRef);
        setEnquiryCount(enquirySnap.size);

        const enquiryDocs = enquirySnap.docs.map((d) => d.data());
        const newCount = enquiryDocs.filter((d) => !d.status || d.status === "New").length;
        setNewEnquiryCount(newCount);

        const recentEnquiriesQ = query(enquiriesRef, orderBy("createdAt", "desc"), limit(5));
        const recentEnquiriesSnap = await getDocs(recentEnquiriesQ);
        const enquiriesList = recentEnquiriesSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setRecentEnquiries(enquiriesList);
      } catch (err) {
        console.error("Error loading dashboard metrics:", err);
      } finally {
        setLoading(false);
      }
    }

    loadMetrics();
  }, []);

  return (
    <div className="max-w-7xl mx-auto space-y-8 font-sans">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Dashboard
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Overview of blog articles and enquiry submissions
          </p>
        </div>

        <Link
          href="/admin/blogs/new"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>New Blog</span>
        </Link>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {[
          {
            label: "Total Blogs",
            value: blogCount,
            icon: FileText,
            href: "/admin/blogs",
            iconWrap: "bg-blue-50 text-blue-600",
          },
          {
            label: "Published Blogs",
            value: publishedCount,
            icon: CheckCircle2,
            href: "/admin/blogs",
            iconWrap: "bg-emerald-50 text-emerald-600",
          },
          {
            label: "Draft Blogs",
            value: draftCount,
            icon: FileEdit,
            href: "/admin/blogs",
            iconWrap: "bg-amber-50 text-amber-600",
          },
          {
            label: "Total Enquiries",
            value: enquiryCount,
            icon: Inbox,
            href: "/admin/enquiries",
            iconWrap: "bg-indigo-50 text-indigo-600",
          },
          {
            label: "New Enquiries",
            value: newEnquiryCount,
            icon: Sparkles,
            href: "/admin/enquiries",
            iconWrap: "bg-rose-50 text-rose-600",
          },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.label}
              href={stat.href}
              className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-slate-300 hover:shadow-sm transition-all space-y-3 block"
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${stat.iconWrap}`}>
                <Icon className="w-4.5 h-4.5" />
              </div>
              <div className="text-2xl font-bold text-slate-900">
                {loading ? "..." : stat.value ?? 0}
              </div>
              <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
            </Link>
          );
        })}
      </div>

      {/* Quick Recent Grids */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
        {/* Recent Blogs */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-4.5 h-4.5 text-slate-400" />
              <span>Recent Blog Articles</span>
            </h2>
            <Link href="/admin/blogs" className="text-xs text-blue-600 font-semibold hover:underline">
              View All
            </Link>
          </div>

          {loading ? (
            <div className="text-center py-10 text-slate-400 text-sm">
              <div className="animate-spin rounded-full h-6 w-6 border-2 border-slate-200 border-t-blue-600 mx-auto mb-3"></div>
              Loading recent articles...
            </div>
          ) : recentBlogs.length === 0 ? (
            <div className="text-center py-10 text-slate-400 text-sm">
              No blog articles yet.
              <br />
              <Link href="/admin/blogs/new" className="text-blue-600 font-semibold hover:underline mt-2 inline-block">
                Create your first article
              </Link>
            </div>
          ) : (
            <div className="space-y-2.5">
              {recentBlogs.map((b) => (
                <div
                  key={b.id}
                  className="bg-slate-50 border border-slate-100 hover:border-slate-200 rounded-xl p-4 flex items-center justify-between gap-4 transition-colors"
                >
                  <div className="min-w-0 flex-1 space-y-1">
                    <p className="text-sm font-semibold text-slate-900 truncate">
                      {b.title}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="text-blue-600 font-semibold">{b.category || "GENERAL"}</span>
                      <span>•</span>
                      <span>{b.date || "Recent"}</span>
                    </div>
                  </div>
                  <Link
                    href={`/admin/blogs/${b.id}/edit`}
                    className="text-xs text-slate-600 hover:text-blue-600 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-200 transition-colors font-semibold shrink-0"
                  >
                    Edit
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Enquiries */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Inbox className="w-4.5 h-4.5 text-slate-400" />
              <span>Recent Enquiries</span>
            </h2>
            <Link href="/admin/enquiries" className="text-xs text-blue-600 font-semibold hover:underline">
              View & Export CSV
            </Link>
          </div>

          {loading ? (
            <div className="text-center py-10 text-slate-400 text-sm">
              <div className="animate-spin rounded-full h-6 w-6 border-2 border-slate-200 border-t-blue-600 mx-auto mb-3"></div>
              Loading submissions...
            </div>
          ) : recentEnquiries.length === 0 ? (
            <div className="text-center py-10 text-slate-400 text-sm">
              No enquiry submissions recorded yet.
            </div>
          ) : (
            <div className="space-y-2.5">
              {recentEnquiries.map((e) => (
                <div
                  key={e.id}
                  className="bg-slate-50 border border-slate-100 hover:border-slate-200 rounded-xl p-4 flex items-center justify-between gap-4 transition-colors"
                >
                  <div className="min-w-0 flex-1 space-y-1">
                    <p className="text-sm font-semibold text-slate-900 truncate flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{e.schoolName || "Unnamed School"}</span>
                    </p>
                    <div className="flex items-center gap-2 text-xs text-slate-500 truncate">
                      <span>{e.fullName || e.designation}</span>
                      <span>•</span>
                      <span>{e.mobileNumber}</span>
                      <span>•</span>
                      <span>{e.city}</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-lg shrink-0">
                    {e.createdAt?.toDate ? e.createdAt.toDate().toLocaleDateString("en-IN") : "Recent"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
