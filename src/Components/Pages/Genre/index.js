import React, { useState, useEffect } from "react";
import Wrapper from "../../Wrapper";
import { Container } from "react-bootstrap";
import { GenerWrapper } from "./style";
import * as genreService from '../../../services/genreService';
import MoviesLists from "../../Commons/MoviesLists";

/**
 * @author
 * @function Genre
 **/

const Genre = (props) => {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    try {
      const genres = await genreService.getGenre();
      setGenres(genres);

      const movies = await genreService.getMovieByGenre(genres[0].id);
      setMovies(movies);

    } catch (error) {
      console.log(error)
    }
  }, []);

  const handleCat = async (currentId) => {
    try {
      const movies = await genreService.getMovieByGenre(currentId);
      setMovies(movies);

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Wrapper {...props}>
      <Container>
        <h2>Movies Genres</h2>
        <GenerWrapper>
          <ul>
            {genres.map((genre) => {
              return (
                <li key={genre.id}>
                  <button onClick={() => handleCat(genre.id)}>{genre.name}</button>
                </li>
              );
            })}
          </ul>
        </GenerWrapper>
        <MoviesLists moviesItems={movies} />
      </Container>
    </Wrapper>
  );
};

export default Genre;
