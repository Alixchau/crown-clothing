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

/* take the userAuth object that get from auth library and store inside our database*/
export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return; //if userAuth object is null

  const userRef = firestore.doc(`users/${userAuth.uid}`);//use string interpolation to check if the userAuth object get from auth library actually exist in database and get user docReference
  const snapShot = await userRef.get();//get a snapShop from that user reference

  if(!snapShot.exists){ //if user snapShop doesn't exist, we create new document using docReference CRUD method's create method .set()
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    }catch(error){
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}
/* config for google authentication */
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;