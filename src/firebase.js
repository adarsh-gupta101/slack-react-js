import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDFd5f3Uu9Y8etqMPIDDxQBh7NMTk9SnhA",
  authDomain: "react-sllacckk.firebaseapp.com",
  projectId: "react-sllacckk",
  storageBucket: "react-sllacckk.appspot.com",
  messagingSenderId: "590437384138",
  appId: "1:590437384138:web:ee93369de9183d96fa9933",
  measurementId: "G-6HBGEN59C5",
};

/* const firebaseConfig = {
    apiKey: "AIzaSyDVFHFiNtBVHBlDVU2PjXxkP9DIf2q_kW8",
    authDomain: "slack-clone-challenge.firebaseapp.com",
    projectId: "slack-clone-challenge",
    storageBucket: "slack-clone-challenge.appspot.com",
    messagingSenderId: "591670883254",
    appId: "1:591670883254:web:df814fd1dc556fb8c38717"
  };
 */
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
