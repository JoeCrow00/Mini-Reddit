import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.reddit.com',
    timeout: 10000,
});
