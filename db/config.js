//import firebase from 'firebase/app';
//import 'firebase/firestore'
//import 'firebase/auth'

require('dotenv').config();
const firebase = require("firebase/app");
//require("firebase/auth");
require("firebase/firestore");


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
// export const db = firebase.firestore();
// export default firebase;

module.exports = firebase;