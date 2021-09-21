import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBl4ns2ixk0yeTVjLWBtZNft8jssaX74W0",
    authDomain: "commate-da028.firebaseapp.com",
    projectId: "commate-da028",
    storageBucket: "commate-da028.appspot.com",
    messagingSenderId: "602573539183",
    appId: "1:602573539183:web:11308c4f6f199ef9c90a9a",
    measurementId: "G-HMJQ51Q9W3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;