// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB5NDAMsxr-HB1b9KHtEnnmJpkC4EYUhA",
  authDomain: "espresso-client.firebaseapp.com",
  projectId: "espresso-client",
  storageBucket: "espresso-client.appspot.com",
  messagingSenderId: "345474640392",
  appId: "1:345474640392:web:92ccd49283b8ba3b0c7fbd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
