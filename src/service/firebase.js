import firebase from 'firebase';

const config = {

};

firebase.initializeApp(config);

export default {
  database: firebase.database(),
};