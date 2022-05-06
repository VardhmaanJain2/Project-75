import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAyo8lI5lWPHzqu9u0CrxiB2vpWcV2_gSY",
  authDomain: "e-ride-756e0.firebaseapp.com",
  projectId: "e-ride-756e0",
  storageBucket: "e-ride-756e0.appspot.com",
  messagingSenderId: "612826837612",
  appId: "1:612826837612:web:2922f4b11fbfa5ede4de49"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
