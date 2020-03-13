import axios from 'axios';

const api = axios.create({
    baseURL: `https://api.chucknorris.io/jokes`,
    responseType: 'json'
});

const getCategories = () => api.get(`/categories`);

const getJoke = category => api.get(`/random?category=${category}`);

export default { getJoke, getCategories };