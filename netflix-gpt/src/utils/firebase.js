// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9IqOvrHLJKUNnn6aBFpULeQ7EmWow1dA",
  authDomain: "netflixgpt-aca5f.firebaseapp.com",
  projectId: "netflixgpt-aca5f",
  storageBucket: "netflixgpt-aca5f.appspot.com",
  messagingSenderId: "952110514575",
  appId: "1:952110514575:web:89c5341b13d65f07304bfa",
  measurementId: "G-FL3K8VKP2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();