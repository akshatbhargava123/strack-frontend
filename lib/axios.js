import Axios from 'axios';
import firebase from 'firebase/app';

const axios = Axios.create({
    baseURL: 'http://51.116.235.46',
});

axios.interceptors.request.use(async (config) => ({
    ...config,
    headers: {
        authtoken: (firebase.auth().currentUser && await firebase.auth().currentUser.getIdToken()),
    },
}));

export default axios;
