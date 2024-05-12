import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCQeUEUEoXvX_xDrQVxgYE-UQDT1dHlbSM",
  authDomain: "boilerplatelog.firebaseapp.com",
  projectId: "boilerplatelog",
  storageBucket: "boilerplatelog.appspot.com",
  messagingSenderId: "810387476743",
  appId: "1:810387476743:web:2a142366a593353d6b35a2"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const auth = getAuth(app)



export { app, auth , db};
