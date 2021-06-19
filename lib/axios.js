import Axios from 'axios';
import firebase from 'firebase';

const axios = Axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        authtoken: firebase.auth().currentUser.getIdToken(),
    },
});

export default axios;
