import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerapp-732b9-default-rtdb.firebaseio.com/'
});

export default instance;