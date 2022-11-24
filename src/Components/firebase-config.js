import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqMVIr5qf57TFLE3bVLAR32wSRlDNXfCw",
  authDomain: "weather-blog-app-final.firebaseapp.com",
  projectId: "weather-blog-app-final",
  storageBucket: "weather-blog-app-final.appspot.com",
  messagingSenderId: "214880508068",
  appId: "1:214880508068:web:b6938ea20a751c018fae31"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore();
