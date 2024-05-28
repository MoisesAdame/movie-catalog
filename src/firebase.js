import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeJUApp-8rO7QR0FssrlkoeOmjihIiMCQ",
  authDomain: "movies-db-177b0.firebaseapp.com",
  projectId: "movies-db-177b0",
  storageBucket: "movies-db-177b0.appspot.com",
  messagingSenderId: "1037854983275",
  appId: "1:1037854983275:web:91e7622f13fea4b69e5d2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);