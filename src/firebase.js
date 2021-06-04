import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBbXopct4zzunD7Y9YtZAlVXK6r-oMwwe4",
    authDomain: "todo-f31e4.firebaseapp.com",
    projectId: "todo-f31e4",
    storageBucket: "todo-f31e4.appspot.com",
    messagingSenderId: "386404027215",
    appId: "1:386404027215:web:9a8c1ccb8c2c0fbcb9933a",
    measurementId: "G-08S72LJYNP"
};

firebase.initializeApp(firebaseConfig);

export default firebase;