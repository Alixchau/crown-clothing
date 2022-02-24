import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBePJ11KwQ59c1aeuCc3lYdIHOf2silx_4",
  authDomain: "crown-db-3613e.firebaseapp.com",
  projectId: "crown-db-3613e",
  storageBucket: "crown-db-3613e.appspot.com",
  messagingSenderId: "338614942510",
  appId: "1:338614942510:web:0af603e98518e4fba7d8bf",
  measurementId: "G-077XFM6CLT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;