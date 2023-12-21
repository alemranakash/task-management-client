// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtsvTAnwNkxWMfffqhmwd8sop7cLOnSC8",
  authDomain: "assignment-12-e7980.firebaseapp.com",
  projectId: "assignment-12-e7980",
  storageBucket: "assignment-12-e7980.appspot.com",
  messagingSenderId: "496700396609",
  appId: "1:496700396609:web:4fefebea3bcb4736c762c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;