// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAApw8io7iRvT7rxwHyFn_1xxJhKemzsdY",
  authDomain: "webb-cd48c.firebaseapp.com",
  projectId: "webb-cd48c",
  storageBucket: "webb-cd48c.firebasestorage.app",
  messagingSenderId: "755213981420",
  appId: "1:755213981420:web:4763c8dadc5e7b50b3f7c9",
  measurementId: "G-QM1TFP2KHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);