// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDoc_HHSOlH6-GFOhhAkB5UomaEF31HgW0",
  authDomain: "hack-b13fe.firebaseapp.com",
  projectId: "hack-b13fe",
  storageBucket: "hack-b13fe.appspot.com",
  messagingSenderId: "357660628945",
  appId: "1:357660628945:web:e32725be605c5a889f32f0",
  measurementId: "G-SNHHGLTFYQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);


export {app ,auth}