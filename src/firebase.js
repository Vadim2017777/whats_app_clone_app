import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAWmgtXM2tqjw13KIXW03kyFCe2F-GcAJY",
  authDomain: "whatsappclone-d7962.firebaseapp.com",
  databaseURL: "https://whatsappclone-d7962.firebaseio.com",
  projectId: "whatsappclone-d7962",
  storageBucket: "whatsappclone-d7962.appspot.com",
  messagingSenderId: "818600159772",
  appId: "1:818600159772:web:21dfa735fd146457350dd9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = firebase.auth.GithubAuthProvider();

export { auth, provider };

export default db;
