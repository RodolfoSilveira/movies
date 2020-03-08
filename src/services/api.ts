import axios from 'axios';

const apiKey = '2f5315f6490f5621bbcbacdedf91ad7f';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export { api, apiKey };
