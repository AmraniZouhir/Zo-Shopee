// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6j_eXS9w3w1cIFtLF1ivYd1YbmirHxtI",
  authDomain: "z-shopee-e-commerce-website.firebaseapp.com",
  projectId: "z-shopee-e-commerce-website",
  storageBucket: "z-shopee-e-commerce-website.appspot.com",
  messagingSenderId: "355591704412",
  appId: "1:355591704412:web:402675b340337c3e3c3b99",
  measurementId: "G-20MBBNQQPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
const analytics = getAnalytics(app);