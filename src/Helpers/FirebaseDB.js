var Firebase = require('firebase');

const config = {
    apiKey: "AIzaSyC1HjGlzQvlRNJKGa40edrjDnW4e6pizjA",
    authDomain: "bucketlist-789b2.firebaseapp.com",
    databaseURL: "https://bucketlist-789b2.firebaseio.com",
    storageBucket: "bucketlist-789b2.appspot.com",
};

const firebaseApp = Firebase.initializeApp(config);
export default firebaseApp;
