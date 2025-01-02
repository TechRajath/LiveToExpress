import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDaBNIwPTx-HpG9k3KkQV67Z5BDjfKF1bU",
  authDomain: "easypark-5dc21.firebaseapp.com",
  databaseURL: "https://easypark-5dc21-default-rtdb.firebaseio.com",
  projectId: "easypark-5dc21",
  storageBucket: "easypark-5dc21.appspot.com",
  messagingSenderId: "94132117704",
  appId: "1:94132117704:web:49d845a228a1e7a09b45fd",
  measurementId: "G-3QV7Y4EVFM",
});

const db = firebaseApp.firestore();
export default db;
