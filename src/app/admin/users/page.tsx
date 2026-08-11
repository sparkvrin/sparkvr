"use client";

import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig, db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  setDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { UserPlus, ShieldCheck, Mail, Lock, CheckCircle2, AlertCircle, User as UserIcon, Users } from "lucide-react";

export default function AdminUsersPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Admin");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [admins, setAdmins] = useState<any[]>([]);
  const [adminsLoading, setAdminsLoading] = useState(true);

  const fetchAdmins = async () => {
    setAdminsLoading(true);
    try {
      const q = query(collection(db, "admins"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      setAdmins(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    } catch (err) {
      console.error("Error fetching admins:", err);
    } finally {
      setAdminsLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  const handleCreateAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    if (!name || !email || !password) {
      setError("Please enter name, email, and password.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    try {
      const secondaryApp = initializeApp(firebaseConfig, `SecondaryApp_${Date.now()}`);
      const secondaryAuth = getAuth(secondaryApp);

      let accountAlreadyExisted = false;
      try {
        await createUserWithEmailAndPassword(secondaryAuth, email, password);
      } catch (createErr: any) {
        if (createErr.code === "auth/email-already-in-use") {
          accountAlreadyExisted = true;
        } else {
          throw createErr;
        }
      }

      await setDoc(doc(db, "admins", email.toLowerCase()), {
        name,
        email,
        role,
        status: "Active",
        createdAt: serverTimestamp(),
      });

      setSuccess(
        accountAlreadyExisted
          ? `Saved administrator profile for existing account: ${email}`
          : `Successfully registered new administrator: ${email}`
      );
      setName("");
      setEmail("");
      setPassword("");
      setRole("Admin");
      fetchAdmins();
    } catch (err: any) {
      console.error("Error adding admin:", err);
      setError(err.message || "Failed to create administrator account.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 font-sans">
      {/* Header */}
      <div className="pb-6 border-b border-slate-200">
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
          <UserPlus className="w-6 h-6 text-blue-600" />
          <span>Admin User Management</span>
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Provision additional administrator accounts for SparkVR CMS access.
        </p>
      </div>

      {/* Creation Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6">
        <div>
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-4.5 h-4.5 text-blue-600" />
            <span>Create Administrator Account</span>
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Newly created administrators will be authorized to access the CMS, manage articles, and view/export enquiries.
          </p>
        </div>

        {success && (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium flex items-center gap-2.5">
            <CheckCircle2 className="w-4.5 h-4.5 shrink-0" />
            <span>{success}</span>
          </div>
        )}

        {error && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm font-medium flex items-center gap-2.5">
            <AlertCircle className="w-4.5 h-4.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleCreateAdmin} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Full Name *
            </label>
            <div className="relative">
              <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full bg-white border border-slate-300 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Admin Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="newadmin@sparkvr.in"
                className="w-full bg-white border border-slate-300 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Account Password *
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimum 6 characters"
                className="w-full bg-white border border-slate-300 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
            >
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 text-sm"
          >
            {loading ? (
              <span>Registering Administrator...</span>
            ) : (
              <>
                <UserPlus className="w-4 h-4" />
                <span>Add Administrator Account</span>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Existing Admins List */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 space-y-5">
        <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
          <Users className="w-4.5 h-4.5 text-blue-600" />
          <span>Existing Administrators</span>
        </h2>

        {adminsLoading ? (
          <div className="text-center py-10 text-slate-400 text-sm">
            <div className="animate-spin rounded-full h-6 w-6 border-2 border-slate-200 border-t-blue-600 mx-auto mb-3"></div>
            Loading administrators...
          </div>
        ) : admins.length === 0 ? (
          <p className="text-slate-400 text-sm py-6 text-center">
            No administrator profiles recorded yet. Use the form above to add one.
          </p>
        ) : (
          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-500 uppercase tracking-wide font-bold border-b border-slate-200 text-xs">
                <tr>
                  <th className="p-3.5 pl-5">Name</th>
                  <th className="p-3.5">Email</th>
                  <th className="p-3.5">Role</th>
                  <th className="p-3.5 pr-5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {admins.map((a) => (
                  <tr key={a.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 pl-5 font-bold text-slate-900">{a.name}</td>
                    <td className="p-3.5 text-slate-500">{a.email}</td>
                    <td className="p-3.5">
                      <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full">
                        {a.role || "Admin"}
                      </span>
                    </td>
                    <td className="p-3.5 pr-5">
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                        {a.status || "Active"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
