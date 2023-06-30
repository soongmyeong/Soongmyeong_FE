import axios from 'axios';

const api = axios.create({
    baseURL: 'http://43.200.96.180:8345/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;