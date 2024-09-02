// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEWzE5iT_zVsRXZONCnb_v46-imUu9_ik",
  authDomain: "netflix-gpt-6080c.firebaseapp.com",
  projectId: "netflix-gpt-6080c",
  storageBucket: "netflix-gpt-6080c.appspot.com",
  messagingSenderId: "395433922058",
  appId: "1:395433922058:web:df2917f13ba44fffff99f3",
  measurementId: "G-3GJKL592MT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();