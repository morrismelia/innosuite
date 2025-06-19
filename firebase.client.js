// src/firebase/firebase.client.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDf-nc4HaP0PZpjG8UOtuYOb-V4q1M5UnE",
  authDomain: "innosuite-2025.firebaseapp.com",
  projectId: "innosuite-2025",
  storageBucket: "innosuite-2025.appspot.com",
  messagingSenderId: "392505411387",
  appId: "1:392505411387:web:5ee5b46505d4bd6d70a40b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
