import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyC39-eYZljmsndyW6n7EqFujrpuHrAvyFM",
    authDomain: "pokemon-1adb8.firebaseapp.com",
    databaseURL: "https://pokemon-1adb8.firebaseio.com",
    projectId: "pokemon-1adb8",
    storageBucket: "pokemon-1adb8.appspot.com",
    messagingSenderId: "553164688771",
    appId: "1:553164688771:web:f77aa88827179aea44fab6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const firestore = firebase.firestore();

  export default firebase;