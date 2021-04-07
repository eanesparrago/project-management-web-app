import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYIP8jeMNkoRX8zkM6nIlkPiG1gNmRZX8",
  authDomain: "asana-clone-b9e6b.firebaseapp.com",
  projectId: "asana-clone-b9e6b",
  storageBucket: "asana-clone-b9e6b.appspot.com",
  messagingSenderId: "169446998150",
  appId: "1:169446998150:web:309bcb2126e74865fed107",
  measurementId: "G-GLFR4EW5KR",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// Initialize Firestore database
export const firestore = firebase.firestore();

export default firebase;
