import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARp0Ea3vIEa9UkTEcyv6FZMQkbjm8-v3Q",
    authDomain: "my-booky-project.firebaseapp.com",
    projectId: "my-booky-project",
    storageBucket: "my-booky-project.appspot.com",
    messagingSenderId: "610703772387",
    appId: "1:610703772387:web:b71822a8beec2224ea93d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;