import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDfud3rSUJNAg6KL_hu4Vc484-Y_yLswhM",
  authDomain: "class75-26b35.firebaseapp.com",
  projectId: "class75-26b35",
  storageBucket: "class75-26b35.appspot.com",
  messagingSenderId: "984588727955",
  appId: "1:984588727955:web:51dd5b5663b55eab397f66"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
