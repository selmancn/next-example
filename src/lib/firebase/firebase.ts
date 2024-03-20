// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwFVmWhwbdJDkcyMlUp9xjnptbdzG08WA",
  authDomain: "next-example-bdd23.firebaseapp.com",
  projectId: "next-example-bdd23",
  storageBucket: "next-example-bdd23.appspot.com",
  messagingSenderId: "486278993964",
  appId: "1:486278993964:web:d112ccb22aedfa9adc1989",
  measurementId: "G-FCWRZB80ZM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
