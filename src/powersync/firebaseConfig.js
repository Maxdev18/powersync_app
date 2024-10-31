import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBcxw89bnq26DGKgiEgmZDadtp4oEzsvBk",
    authDomain: "powersync-c4f88.firebaseapp.com",
    projectId: "powersync-c4f88",
    storageBucket: "powersync-c4f88.appspot.com",
    messagingSenderId: "309319798725",
    appId: "1:309319798725:web:10441fae998e834bef05ac"
  };

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export const db = getFirestore(app);