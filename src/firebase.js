import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFaE5dAkIXeKP-zG4a6RGSzOD2fiVKryI",
  authDomain: "slack-clone-fd8a8.firebaseapp.com",
  projectId: "slack-clone-fd8a8",
  storageBucket: "slack-clone-fd8a8.appspot.com",
  messagingSenderId: "121201836771",
  appId: "1:121201836771:web:0b58244a928656510b7bd6",
  measurementId: "G-VRSLE0R32E"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()


  export { auth, db , provider}



  // : if
  // request.time < timestamp.date(2021, 3, 27);