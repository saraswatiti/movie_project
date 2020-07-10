import axios from 'axios';
import { tmdb_api_url, tmdb_api_key } from '../config';

export const getGenre = async () => {

  try {
    const result = await axios.get(`${tmdb_api_url}/genre/movie/list?api_key=${tmdb_api_key}&language=en-US`);

    return result.data.genres;
  } catch (error) {

    throw new Error(error.message);
  }
}

export const getMovieByGenre = async genreId => {

  try {
    const result = await axios.get(`${tmdb_api_url}/discover/movie?api_key=${tmdb_api_key}&with_genres=${genreId}`);

    return result.data.results;
  } catch (error) {

    throw new Error(error.message)
  }
}