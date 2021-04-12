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
export const signOut = () => auth.signOut();

export const createUserProfileDocument = async (
  user: firebase.User,
  additionalData?: object
) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;

    // TODO
    const createdAt = new Date();

    const isActivated = false;

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        isActivated,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user", error.message);
    }
  }

  return getUserDocument(user.uid);
};

export const getUserDocument = async (uid: string) => {
  if (!uid) return null;

  try {
    const userDocument = await firestore.collection("users").doc(uid).get();

    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.log("Error fetching user", error.message);
  }
};

export default firebase;
