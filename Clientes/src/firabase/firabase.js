//app firebase
import firebase from "firebase/compat/app";

import firebaseConfig from "./config";

class Firebase {
  constructor() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}

const firabaseAPP = new Firebase();

export default firabaseAPP;
