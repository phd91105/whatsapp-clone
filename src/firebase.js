import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4Zp4QIjHU0aqCRhyIqz8iWDyE4HAiYOo",
  authDomain: "whatsapp-271c0.firebaseapp.com",
  databaseURL: "https://whatsapp-271c0-default-rtdb.firebaseio.com",
  projectId: "whatsapp-271c0",
  storageBucket: "whatsapp-271c0.appspot.com",
  messagingSenderId: "998262847070",
  appId: "1:998262847070:web:4d02b12c03f72077a666cf",
  measurementId: "G-3TPMRJ05KD"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
