import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyCEqrlxFzuMtTfKTLAizSK4CKqQ74E5bJY",
    authDomain: "storyhub-8e35b.firebaseapp.com",
    projectId: "storyhub-8e35b",
    storageBucket: "storyhub-8e35b.appspot.com",
    messagingSenderId: "681411032513",
    appId: "1:681411032513:web:a609eefa6aaf0efd26eb40"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()