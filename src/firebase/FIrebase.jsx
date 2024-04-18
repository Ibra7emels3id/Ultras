// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAuLlKEZncps_moU-Lod1l5Mz_eLCLHhcM",
    authDomain: "ultras-d1bfd.firebaseapp.com",
    projectId: "ultras-d1bfd",
    storageBucket: "ultras-d1bfd.appspot.com",
    messagingSenderId: "937889682759",
    appId: "1:937889682759:web:12f737efe93cee1c7b2862",
    measurementId: "G-TKQMRMRR4F"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);