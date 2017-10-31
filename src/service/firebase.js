import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBuPZzoMLCB8yQBKRA8qa7vt3okPjm8-NY',
  authDomain: 'cropchat-18f8a.firebaseapp.com',
  databaseURL: 'https://cropchat-18f8a.firebaseio.com',
  storageBucket: 'cropchat-18f8a.appspot.com',
  projectId: 'cropchat-18f8a',
  messagingSenderId: '136274533795',
};

firebase.initializeApp(config);

export default {
  database: firebase.database(),
};
