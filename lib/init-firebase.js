import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCX-aO5E00gRzLCYVvhhv7HMd9bYbJwgt4",
    authDomain: "strackstack.firebaseapp.com",
    projectId: "strackstack",
    storageBucket: "strackstack.appspot.com",
    messagingSenderId: "603561779047",
    appId: "1:603561779047:web:ead14b93af0ac8c2b219c2"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
