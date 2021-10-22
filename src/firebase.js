// import   * as firebase from "firebase/app";
// import 'firebase/auth'
// firebase.initializeApp({auth})
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// require("firebase/auth")
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_7YBQOCNx_g1gYCgekuIh7uQdSQcUtQ4",
    authDomain: "clone-f2461.firebaseapp.com",
    projectId: "clone-f2461",
    storageBucket: "clone-f2461.appspot.com",
    messagingSenderId: "500603561429",
    appId: "1:500603561429:web:67b6460a06b6a3b8e5495c",
    measurementId: "G-EB4NLC6DY5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

export default {db,auth};