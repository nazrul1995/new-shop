// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUxqmj0a62NVNvXR2N2-1y5Co8sFrAUMI",
  authDomain: "pabel-shop.firebaseapp.com",
  projectId: "pabel-shop",
  storageBucket: "pabel-shop.firebasestorage.app",
  messagingSenderId: "1037213134701",
  appId: "1:1037213134701:web:29a1edd49fd7bcf1733464"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);