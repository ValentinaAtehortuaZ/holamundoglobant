// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGG2fhAQuSJ42njtyAg8_Sg0oYlZCIEuw",
    authDomain: "loginstoreglobant.firebaseapp.com",
    projectId: "loginstoreglobant",
    storageBucket: "loginstoreglobant.appspot.com",
    messagingSenderId: "503737119150",
    appId: "1:503737119150:web:4f023e9417d05ec345d83f",
    measurementId: "G-74G0JXGJLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);