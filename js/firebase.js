// =========================
// FIREBASE CONFIGURATION
// =========================

import { initializeApp } from
    "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getFirestore } from
    "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCfhGR3-k4RRPd4SZzPUsN7kF7KHOCFT5o",
    authDomain: "matendo-daycare.firebaseapp.com",
    projectId: "matendo-daycare",
    storageBucket: "matendo-daycare.firebasestorage.app",
    messagingSenderId: "90675878872",
    appId: "1:90675878872:web:c97daa59a21eb3f8ec30ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };