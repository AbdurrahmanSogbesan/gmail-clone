import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVp_OV9J-sCZf0japE9PpckIJGP2JKiKQ",
  authDomain: "clone-37e4b.firebaseapp.com",
  projectId: "clone-37e4b",
  storageBucket: "clone-37e4b.appspot.com",
  messagingSenderId: "5117223331",
  appId: "1:5117223331:web:dad8c56a694ddf0cefba16",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
