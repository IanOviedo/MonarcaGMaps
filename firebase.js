// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnWvx01JOmV0BER1kVE5LRLyCg9vkT1V0",
    authDomain: "monarca-gmaps.firebaseapp.com",
    projectId: "monarca-gmaps",
    storageBucket: "monarca-gmaps.appspot.com",
    messagingSenderId: "765787802160",
    appId: "1:765787802160:web:b9fc628d15e490c94d3bf5",
    measurementId: "G-4MJGX24ZT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);