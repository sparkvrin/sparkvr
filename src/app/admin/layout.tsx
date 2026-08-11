"use client";

import React, { useEffect } from "react";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  FileText,
  Inbox,
  LogOut,
  UserPlus,
  LayoutDashboard,
  ExternalLink,
  Tag,
} from "lucide-react";

function ProtectedAdminShell({ children }: { children: React.ReactNode }) {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (!loading && !user && !isLoginPage) {
      router.push("/admin/login");
    }
  }, [user, loading, isLoginPage, router]);

  if (isLoginPage) {
    return <>{children}</>;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-10 w-10 border-2 border-slate-200 border-t-blue-600"></div>
          <p className="text-sm text-slate-500 font-medium">Loading Admin Portal...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const navItems = [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Blogs", href: "/admin/blogs", icon: FileText },
    { label: "Categories", href: "/admin/categories", icon: Tag },
    { label: "Enquiries", href: "/admin/enquiries", icon: Inbox },
    { label: "Administrators", href: "/admin/users", icon: UserPlus },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col md:flex-row font-sans">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-b md:border-b-0 md:border-r border-slate-200 flex flex-col justify-between p-5 shrink-0">
        <div>
          {/* Brand Header */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200">
            <Link href="/admin" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
                S
              </div>
              <div>
                <span className="font-bold text-base text-slate-900 tracking-tight leading-none block">
                  SparkVR
                </span>
                <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                  Admin
                </span>
              </div>
            </Link>

            <Link
              href="/"
              target="_blank"
              className="text-slate-400 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-slate-100"
              title="View Public Website"
            >
              <ExternalLink className="w-4.5 h-4.5" />
            </Link>
          </div>

          {/* Nav Links */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <Icon className={`w-4.5 h-4.5 ${isActive ? "text-blue-600" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Footer & Logout */}
        <div className="pt-6 mt-6 border-t border-slate-200 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 gap-2">
            <span className="truncate max-w-[140px] font-medium text-slate-700" title={user.email || ""}>
              {user.email}
            </span>
            <span className="bg-emerald-50 text-emerald-700 text-[10px] px-2 py-0.5 rounded-full font-bold shrink-0">
              Admin
            </span>
          </div>

          <button
            onClick={logout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-red-50 hover:text-red-600 text-xs font-semibold text-slate-600 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-6 md:p-10">
        {children}
      </main>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ProtectedAdminShell>{children}</ProtectedAdminShell>
    </AuthProvider>
  );
}
