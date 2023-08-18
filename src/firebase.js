// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE2KQ73xpAyl5jcBm7Nm3xwWZXAgb_d9Y",
  authDomain: "cityhospital-8b449.firebaseapp.com",
  projectId: "cityhospital-8b449",
  storageBucket: "cityhospital-8b449.appspot.com",
  messagingSenderId: "211293010433",
  appId: "1:211293010433:web:c461bd816f496da8cbde00",
  measurementId: "G-EXKZ2SJ551"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);