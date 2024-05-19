// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "asiri-association.firebaseapp.com",
  projectId: "asiri-association",
  storageBucket: "asiri-association.appspot.com",
  messagingSenderId: "832850486491",
  appId: "1:832850486491:web:9d0f135b12ce3f999558fe",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
