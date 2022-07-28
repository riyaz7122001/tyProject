import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyP4LWkIcDyoU_ywUyCTaJqNr59gvK8BU",
  authDomain: "clone-41beb.firebaseapp.com",
  projectId: "clone-41beb",
  storageBucket: "clone-41beb.appspot.com",
  messagingSenderId: "967875007697",
  appId: "1:967875007697:web:bfbe19bc7f6578982b61f0",
  measurementId: "G-LFT6TY43D0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
