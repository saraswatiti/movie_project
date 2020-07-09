import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { tmdb_api_url, tmdb_api_key } from "../../../config";
import MoviesLists from "../../Commons/MoviesLists";

/**
 * @author
 * @function MoviesByGenres
 **/

const MoviesByGenres = ({ catId }) => {
  const [genresList, setGenresList] = useState([]);
  useEffect(() => {
    axios
      .get(
        `
  ${tmdb_api_url}/genre/movie/list?api_key=${tmdb_api_key}&with_genres=${catId}`
      )
      .then((res) => setGenresList(res.data.genres))
      .catch((err) => console.error(err));
  }, []);
  const SearchByCat = () => {
    try {
      const res = axios.get(
        `
  ${tmdb_api_url}/genre/movie/list?api_key=${tmdb_api_key}&with_genres=${catId}`
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  return <MoviesLists moviesItems={genresList} />;
};

export default MoviesByGenres;
