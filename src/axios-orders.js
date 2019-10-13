import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-6bc4c.firebaseio.com/'
});

export default instance;