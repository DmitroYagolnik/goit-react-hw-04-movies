import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_API_KEY;

export const trendingAPI = () =>
  axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);

export const searchAPI = searchValue =>
  axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchValue}`);

export const movieInformationAPI = movieId =>
  axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);

export const castAPI = movieId =>
  axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);

export const reviewsAPI = movieId =>
  axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
