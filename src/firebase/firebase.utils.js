// the base firebase app
import firebase from 'firebase/app'
// the products we want to use
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDIwYLj0z-ZW9vLuFdtifX3hAT9-W4tmEU",
    authDomain: "glutags-944b5.firebaseapp.com",
    projectId: "glutags-944b5",
    storageBucket: "glutags-944b5.appspot.com",
    messagingSenderId: "305340965260",
    appId: "1:305340965260:web:f2d4cf4ce30c7d920ef6a9",
    measurementId: "G-Q4N5VE6656"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
/* this parameter lets google prompt to select 
an account everytime the provider istance is used*/
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

//lets also export the firebase app itself in case it needs to get used elsewhere.
export default firebase;