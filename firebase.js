import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB_0IPvSfBt47dbrQEL-uk9iCJvozo9yIQ",
    authDomain: "pakzone-by-hafiz-and-maham.firebaseapp.com",
    projectId: "pakzone-by-hafiz-and-maham",
    storageBucket: "pakzone-by-hafiz-and-maham.appspot.com",
    messagingSenderId: "671800876281",
    appId: "1:671800876281:web:5bb0becb1c4e9d697e1628"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore()

export default db