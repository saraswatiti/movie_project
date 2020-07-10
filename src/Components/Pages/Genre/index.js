import React, { useState, useEffect } from "react";
import Wrapper from "../../Wrapper";
import { Container } from "react-bootstrap";
import axios from "axios";
import { tmdb_api_url, tmdb_api_key } from "../../../config";
import { Link } from "react-router-dom";
import { GenerWrapper } from "./style";
import MoviesByGenres from "../MoviesByGenres";

/**
 * @author
 * @function Genre
 **/

const Genre = (props) => {
  const [genres, setGenres] = useState([]);
  const [catId, setCatId] = useState(null);
  useEffect(() => {
    axios
      .get(
        `
    ${tmdb_api_url}/genre/movie/list?api_key=${tmdb_api_key}&language=en-US`
      )
      .then((res) => setGenres(res.data.genres))
      .catch((err) => console.error(err));
  }, []);
  const handleCat = (currentId) => {
    setCatId(currentId);
  };
  return (
    <Wrapper {...props}>
      <Container>
        <h2>Movies Genres</h2>
        <GenerWrapper>
          <ul>
            {genres.map((genre) => {
              return (
                <li key={genre.id}>
                  <Link to={`genres/${genre.id}`} onClick={handleCat}>
                    {genre.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </GenerWrapper>
        <MoviesByGenres catId={catId} />
      </Container>
    </Wrapper>
  );
};

export default Genre;
