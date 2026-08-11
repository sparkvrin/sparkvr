"use client";

import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Download, Inbox, Search, RefreshCw, Trash2, School, Phone, Mail, MapPin } from "lucide-react";

const STATUS_OPTIONS = ["New", "Contacted", "Resolved"] as const;

const STATUS_STYLES: Record<string, string> = {
  New: "text-rose-700 bg-rose-50 border-rose-200",
  Contacted: "text-amber-700 bg-amber-50 border-amber-200",
  Resolved: "text-emerald-700 bg-emerald-50 border-emerald-200",
};

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [permissionError, setPermissionError] = useState(false);

  const fetchEnquiries = async () => {
    setLoading(true);
    setPermissionError(false);
    try {
      const q = query(collection(db, "enquiries"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const list = snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));
      setEnquiries(list);
    } catch (err: any) {
      console.error("Error fetching enquiries:", err);
      if (err?.code === "permission-denied") {
        setPermissionError(true);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    try {
      await updateDoc(doc(db, "enquiries", id), { status: newStatus });
      setEnquiries((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
      );
    } catch (err) {
      console.error("Error updating enquiry status:", err);
      alert("Failed to update status.");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id: string, schoolName: string) => {
    if (!window.confirm(`Delete enquiry submission for "${schoolName}"?`)) return;
    setDeletingId(id);
    try {
      await deleteDoc(doc(db, "enquiries", id));
      setEnquiries((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Error deleting enquiry:", err);
      alert("Failed to delete enquiry.");
    } finally {
      setDeletingId(null);
    }
  };

  const filteredEnquiries = enquiries.filter((item) => {
    const term = search.toLowerCase();
    return (
      item.schoolName?.toLowerCase().includes(term) ||
      item.fullName?.toLowerCase().includes(term) ||
      item.designation?.toLowerCase().includes(term) ||
      item.mobileNumber?.toLowerCase().includes(term) ||
      item.emailId?.toLowerCase().includes(term) ||
      item.city?.toLowerCase().includes(term) ||
      item.state?.toLowerCase().includes(term) ||
      item.board?.toLowerCase().includes(term)
    );
  });

  const exportToCSV = () => {
    if (filteredEnquiries.length === 0) {
      alert("No enquiry records available to export.");
      return;
    }

    const headers = [
      "Date",
      "School Name",
      "Contact Person",
      "Designation",
      "Mobile Number",
      "Email ID",
      "City",
      "State",
      "Board",
      "Student Strength",
      "Grades",
      "Status",
    ];

    const rows = filteredEnquiries.map((e) => {
      let dateStr = "N/A";
      if (e.createdAt?.toDate) {
        dateStr = e.createdAt.toDate().toLocaleString("en-IN");
      } else if (e.createdAtString) {
        dateStr = new Date(e.createdAtString).toLocaleString("en-IN");
      }

      return [
        dateStr,
        e.schoolName || "",
        e.fullName || "",
        e.designation || "",
        e.mobileNumber || "",
        e.emailId || "",
        e.city || "",
        e.state || "",
        e.board || "",
        e.studentStrength || "",
        Array.isArray(e.grades) ? e.grades.join(", ") : e.grades || "",
        e.status || "New",
      ];
    });

    const escapeCSVCell = (cell: any) => {
      const stringified = String(cell ?? "");
      if (stringified.includes(",") || stringified.includes('"') || stringified.includes("\n")) {
        return `"${stringified.replace(/"/g, '""')}"`;
      }
      return stringified;
    };

    const csvContent =
      "data:text/csv;charset=utf-8,﻿" +
      [headers, ...rows]
        .map((row) => row.map(escapeCSVCell).join(","))
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    const today = new Date().toISOString().split("T")[0];
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `SparkVR_Enquiries_${today}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
            <Inbox className="w-6 h-6 text-blue-600" />
            <span>Enquiry Submissions</span>
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Review incoming school lead inquiries and export submission records to CSV.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchEnquiries}
            className="p-3 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors cursor-pointer"
            title="Refresh Data"
          >
            <RefreshCw className="w-4.5 h-4.5" />
          </button>

          <button
            onClick={exportToCSV}
            disabled={filteredEnquiries.length === 0}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 cursor-pointer disabled:opacity-50 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export to CSV ({filteredEnquiries.length})</span>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by school, contact person, phone, city, or board..."
          className="w-full bg-white border border-slate-300 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
        />
      </div>

      {permissionError && (
        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-sm leading-relaxed space-y-3">
          <p className="font-bold text-amber-900 text-base">Database Security Rules Setup Notice</p>
          <p>
            Enquiry data read/write permissions are restricted by your database settings. Update security rules in your database tab:
          </p>
          <pre className="p-4 bg-slate-900 rounded-xl text-xs text-blue-300 font-mono overflow-x-auto">
{`rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /enquiries/{enquiryId} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
    match /blogs/{blogId} {
      allow read: if true;
      allow write, delete: if request.auth != null;
    }
  }
}`}
          </pre>
        </div>
      )}

      {/* Table / List */}
      {loading ? (
        <div className="text-center py-20 text-slate-400 text-sm font-medium">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-slate-200 border-t-blue-600 mx-auto mb-4"></div>
          Loading submission records...
        </div>
      ) : filteredEnquiries.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-16 text-center text-slate-400 space-y-3">
          <Inbox className="w-12 h-12 text-slate-300 mx-auto" />
          <p className="font-bold text-slate-900 text-lg">No enquiry records found</p>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            {search ? "No records match your filter term." : "Submissions from website contact forms will appear here."}
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white">
          <table className="w-full text-left text-sm text-slate-700">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wide font-bold border-b border-slate-200 text-xs">
              <tr>
                <th className="p-4 pl-6">School & Contact</th>
                <th className="p-4">Contact Info</th>
                <th className="p-4">Location</th>
                <th className="p-4">Board & Strength</th>
                <th className="p-4">Grades</th>
                <th className="p-4">Date</th>
                <th className="p-4">Status</th>
                <th className="p-4 pr-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredEnquiries.map((item) => {
                let dateDisplay = "N/A";
                if (item.createdAt?.toDate) {
                  dateDisplay = item.createdAt.toDate().toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  });
                } else if (item.createdAtString) {
                  dateDisplay = new Date(item.createdAtString).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  });
                }

                return (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 pl-6">
                      <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                        <School className="w-4 h-4 text-blue-500 shrink-0" />
                        <span>{item.schoolName || "Unnamed School"}</span>
                      </div>
                      <div className="text-slate-500 text-xs mt-1 font-medium">
                        {item.fullName ? `${item.fullName} (${item.designation})` : item.designation}
                      </div>
                    </td>

                    <td className="p-4 space-y-1">
                      <div className="flex items-center gap-2 text-slate-700 font-semibold">
                        <Phone className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.mobileNumber}</span>
                      </div>
                      {item.emailId && (
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                          <Mail className="w-3.5 h-3.5 text-slate-400" />
                          <span>{item.emailId}</span>
                        </div>
                      )}
                    </td>

                    <td className="p-4">
                      <div className="flex items-center gap-2 text-slate-600 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.city}, {item.state}</span>
                      </div>
                    </td>

                    <td className="p-4">
                      <span className="inline-block bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full font-bold text-xs mb-1">
                        {item.board}
                      </span>
                      <div className="text-xs text-slate-500 font-medium">
                        {item.studentStrength} students
                      </div>
                    </td>

                    <td className="p-4 max-w-[160px] truncate text-slate-500 font-medium" title={Array.isArray(item.grades) ? item.grades.join(", ") : item.grades}>
                      {Array.isArray(item.grades) ? item.grades.join(", ") : item.grades}
                    </td>

                    <td className="p-4 text-slate-500 text-xs font-medium whitespace-nowrap">
                      {dateDisplay}
                    </td>

                    <td className="p-4">
                      <select
                        value={item.status || "New"}
                        disabled={updatingId === item.id}
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        className={`text-xs font-bold px-3 py-2 rounded-lg border cursor-pointer focus:outline-none disabled:opacity-50 ${
                          STATUS_STYLES[item.status || "New"] || STATUS_STYLES.New
                        }`}
                      >
                        {STATUS_OPTIONS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </td>

                    <td className="p-4 pr-6 text-right">
                      <button
                        onClick={() => handleDelete(item.id, item.schoolName)}
                        disabled={deletingId === item.id}
                        className="p-2.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-colors cursor-pointer"
                        title="Delete Enquiry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
