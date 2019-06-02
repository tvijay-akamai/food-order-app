import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-3a2eb.firebaseio.com'
});

export default instance;