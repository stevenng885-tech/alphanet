import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyAMb8HxYkMos5EJDiI7sQybyIftIhRB-zg",
    authDomain: "alphanet-9d6ad.firebaseapp.com",
    projectId: "alphanet-9d6ad",
    storageBucket: "alphanet-9d6ad.firebasestorage.app",
    messagingSenderId: "604902367447",
    appId: "1:604902367447:web:75517f1fb2e506be139092",
    measurementId: "G-TDYXQEWDT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const firebaseFireStore = getFirestore(app);
