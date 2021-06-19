import Axios from 'axios';
import firebase from 'firebase/app';

const axios = Axios.create({
    baseURL: 'http://localhost:8000',
});

axios.interceptors.request.use((config) => ({
    ...config,
    headers: {
        authtoken: firebase.auth().currentUser && firebase.auth().currentUser.getIdToken(),
    },
}));

export default axios;
