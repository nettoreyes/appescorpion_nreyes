import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "appescorpion.firebaseapp.com",
    projectId: "appescorpion",
    storageBucket: "appescorpion.appspot.com",
    messagingSenderId: "521404987395",
    appId: "1:521404987395:web:9e571bbd72cecf170cb636"
  };

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;
export const getFirestore  = () => firebase.firestore(app);
