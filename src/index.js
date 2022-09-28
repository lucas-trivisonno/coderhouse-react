import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3mZrFbkcL9Cv-WvYHPurmIv5tQgk03Lk",
  authDomain: "coderhouse-ecommerce-930f5.firebaseapp.com",
  projectId: "coderhouse-ecommerce-930f5",
  storageBucket: "coderhouse-ecommerce-930f5.appspot.com",
  messagingSenderId: "73279078924",
  appId: "1:73279078924:web:f36c6a77e0471ec9ab6429"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
