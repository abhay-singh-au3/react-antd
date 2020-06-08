import { create } from 'apisauce';

export const api = create({
  baseURL: 'https://itunes.apple.com',
  headers: {
    'Access-Control-Allow-Origin': '*',
    mode: 'no-cors',
  },
});

export const apiCall = (query) =>
  api.get(`/search?term=${query}`).then((res) => res.data.results);
