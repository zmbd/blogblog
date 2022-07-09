import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCsJmhmw0LmKzl9LNcg19mSbRRMR0gdk8M",
    authDomain: "blogblog-66a3b.firebaseapp.com",
    projectId: "blogblog-66a3b",
    storageBucket: "blogblog-66a3b.appspot.com",
    messagingSenderId: "423068840771",
    appId: "1:423068840771:web:39149899867695fc1775f6",
    measurementId: "G-XRMGP86000"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
  