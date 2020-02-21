import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyCMENCyyNWZ8KTxwjnNSQzHKCUOmiJnRvI",
    authDomain: "clothing-web.firebaseapp.com",
    databaseURL: "https://clothing-web.firebaseio.com",
    projectId: "clothing-web",
    storageBucket: "clothing-web.appspot.com",
    messagingSenderId: "919551373200",
    appId: "1:919551373200:web:70d523957e604ca10e0d15",
    measurementId: "G-2Q6Q96D3BS"
  };
  export const createUserProfileDocument = async(userAuth,additionalData)=>{
    if(!userAuth)return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const{displayName,email}= userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user',error.message);
      }
    }
    return userRef;
  };
  
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=>auth.signInWithPopup(provider);
export default firebase;