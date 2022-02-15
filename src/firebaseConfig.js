// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsZU0EvHGO-nhZSkheF3MM6MRQv_V8vQY",
  authDomain: "ballerini-devs-react.firebaseapp.com",
  projectId: "ballerini-devs-react",
  storageBucket: "ballerini-devs-react.appspot.com",
  messagingSenderId: "434249628735",
  appId: "1:434249628735:web:25311280bb24620d4a8c8a",
  measurementId: "G-P1921E4JJ6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
