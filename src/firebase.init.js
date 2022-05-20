// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { get } from "react-hook-form";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDdxdRELf_QarrwJKpRxwb8B1vH4gpceQ",
  authDomain: "jerin-parlourbd.firebaseapp.com",
  projectId: "jerin-parlourbd",
  storageBucket: "jerin-parlourbd.appspot.com",
  messagingSenderId: "444733861396",
  appId: "1:444733861396:web:ef8427da7821d4f3634101"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)

export default auth