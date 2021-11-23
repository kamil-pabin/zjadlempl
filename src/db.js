import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB7PECrKv0hec-rYEGRZ9pwY2qjD1anjXA",
    authDomain: "zjadlempl.firebaseapp.com",
    projectId: "zjadlempl",
    storageBucket: "zjadlempl.appspot.com",
    messagingSenderId: "458619606689",
    appId: "1:458619606689:web:1a0a6f1949fa4e613202e0",
    measurementId: "G-LJB5883T1H"
  };
// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })