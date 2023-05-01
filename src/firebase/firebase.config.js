// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdMUC5-x6o2N4LUWqIUlwDXGsNNfoGEqQ",
  authDomain: "dehsi-khabar-auth.firebaseapp.com",
  projectId: "dehsi-khabar-auth",
  storageBucket: "dehsi-khabar-auth.appspot.com",
  messagingSenderId: "1050466626237",
  appId: "1:1050466626237:web:50cb419ac6be0de312a5d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;