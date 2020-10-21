import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAPY2OkSnyEh-DrrAJOFsrlUfs0NKaMvSc",
  authDomain: "tik-tok-clone-cf97d.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-cf97d.firebaseio.com",
  projectId: "tik-tok-clone-cf97d",
  storageBucket: "tik-tok-clone-cf97d.appspot.com",
  messagingSenderId: "398591287457",
  appId: "1:398591287457:web:7a4d8c938220593e1e90e0",
  measurementId: "G-FMRDN8ZCWC",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;

// If firebase expired
// https://console.firebase.google.com/u/0/project/tik-tok-clone-cf97d/firestore/rules
