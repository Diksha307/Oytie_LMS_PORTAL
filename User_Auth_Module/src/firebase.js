import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjNcgC_bITzvFGJXMC6k01N67ZJLUo7CU",
  authDomain: "lmsportal-9a073.firebaseapp.com",
  databaseURL: "https://lmsportal-9a073-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lmsportal-9a073",
  storageBucket: "lmsportal-9a073.appspot.com",
  messagingSenderId: "995068357724",
  appId: "1:995068357724:web:11185625f57ec8faee0a99",
  measurementId: "G-P2Q32VLYHB"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider };
