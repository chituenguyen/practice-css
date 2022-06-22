// Import the functions you need from the SDKs you need
import { getApp, initializeApp,getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3MyyIm8MKJY5dR9i4OdSsgoTBCvQfTfs",
    authDomain: "netflix-clone-b80fd.firebaseapp.com",
    projectId: "netflix-clone-b80fd",
    storageBucket: "netflix-clone-b80fd.appspot.com",
    messagingSenderId: "992108304586",
    appId: "1:992108304586:web:85fbdf62ac5ec926417c33",
    measurementId: "G-SP6WNQLP50"
  };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const app =!getApps().length ? initializeApp(firebaseConfig):getApp();
const db = getFirestore()
const auth = getAuth()

export default app
export {auth,db}