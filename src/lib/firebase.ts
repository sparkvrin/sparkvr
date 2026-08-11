import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyClYhEF5E--zfiQgtlSriWVBpGr1RMGLzE",
  authDomain: "sparkvr-8c1ac.firebaseapp.com",
  projectId: "sparkvr-8c1ac",
  storageBucket: "sparkvr-8c1ac.firebasestorage.app",
  messagingSenderId: "446034735737",
  appId: "1:446034735737:web:ed29349f2cd5304fd4daa8",
  measurementId: "G-ZRX72NL8ML"
};

// Initialize Firebase app safely for SSR and CSR
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Optional client analytics initialization — production only. Analytics'
// IndexedDB connection (used for the Firebase installation ID) gets
// disrupted by Next.js Fast Refresh reinitializing modules during local
// dev, throwing a spurious "Database is closing/hidden" runtime error.
// Dev-time traffic shouldn't be reported to analytics anyway.
if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
  isSupported().then((supported) => {
    if (supported) {
      getAnalytics(app);
    }
  }).catch(() => {});
}

export { app, auth, db };
