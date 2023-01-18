import axios from 'axios';

const BASE_API_URL = 'https://pokeapi.co/api/v2';

const api = axios.create({
  baseURL: BASE_API_URL,
});

export default api;
