// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-app-7c4e8.firebaseapp.com",
  projectId: "mern-app-7c4e8",
  storageBucket: "mern-app-7c4e8.appspot.com",
  messagingSenderId: "541054216571",
  appId: "1:541054216571:web:c70b8a45694b020332f5de"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);