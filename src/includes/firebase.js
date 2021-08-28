import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  // config details
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
// auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
const db = firebase.firestore();

db.enablePersistence().catch((err) => console.log(`Firebase persistence error ${err.code}`));

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
