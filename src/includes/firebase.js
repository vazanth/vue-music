import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAP69LbxnlDWKPbcxV14Tuz02K9gapOkV4',
  authDomain: 'vue-music-9e624.firebaseapp.com',
  projectId: 'vue-music-9e624',
  storageBucket: 'vue-music-9e624.appspot.com',
  messagingSenderId: '331027768497',
  appId: '1:331027768497:web:77d8ebdca9bf0e0854ee90',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
// auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
const db = firebase.firestore();
const storage = firebase.storage();

const userCollection = db.collection('users');
const songCollection = db.collection('songs');
const commentCollection = db.collection('comments');

export {
  auth,
  db,
  userCollection,
  storage,
  songCollection,
  commentCollection,
};
