import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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

// Initialize Firestore database
export const firestore = firebase.firestore();
firestore.settings({ ignoreUndefinedProperties: true });

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
