

import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8081',
});

function registerUser(userData) {
    return instance.post('users/register', userData);
}



export { registerUser };
