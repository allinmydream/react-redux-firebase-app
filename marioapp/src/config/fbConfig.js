import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAkOoAw9P0a_Mm4W5jXoGp6G6bldYGYvAE",
    authDomain: "net-jade-marioplan.firebaseapp.com",
    databaseURL: "https://net-jade-marioplan.firebaseio.com",
    projectId: "net-jade-marioplan",
    storageBucket: "",
    messagingSenderId: "690384286440",
    appId: "1:690384286440:web:a402f851182c98c8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;