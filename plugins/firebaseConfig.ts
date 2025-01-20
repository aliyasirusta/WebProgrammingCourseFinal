import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase yapılandırma bilgileri
const firebaseConfig = {
  apiKey: "AIzaSyB_BVbIu4_JwHEnSWGtdbt-b36csQhJ9pQ",
  authDomain: "webfinal-47964.firebaseapp.com",
  projectId: "webfinal-47964",
  storageBucket: "webfinal-47964.appspot.com", // Burada `firebasestorage.app` yerine doğru olan `.appspot.com` kullanılmalı
  messagingSenderId: "1059144138929",
  appId: "1:1059144138929:web:7ddc2092e4552251c5e290",
  measurementId: "G-KH5YTVTZCT"
};

// Firebase uygulamasını başlat
const firebaseApp = initializeApp(firebaseConfig);

// Firestore ve Authentication referanslarını al
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

// Referansları dışa aktar
export { db, auth };
export default firebaseApp;
