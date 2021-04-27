import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAS8zl4wMI36GC_FPzN6nduxGP-Y9_Di5s",
    authDomain: "fir-login-alizarizqi.firebaseapp.com",
    projectId: "fir-login-alizarizqi",
    storageBucket: "fir-login-alizarizqi.appspot.com",
    messagingSenderId: "436341720142",
    appId: "1:436341720142:web:d174ff241e61fec98b6f1f",
    measurementId: "G-T2DW84XSL7"
  };
  

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;