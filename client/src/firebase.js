// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-257fd.firebaseapp.com",
  projectId: "realestate-257fd",
  storageBucket: "realestate-257fd.appspot.com",
  messagingSenderId: "936240416249",
  appId: "1:936240416249:web:188219df90292fb3826928"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

// Export the storage reference
export { storage };