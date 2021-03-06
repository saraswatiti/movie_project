import React from "react";
import { Link } from "react-router-dom";
import { SearchGrids } from "../../Navbars/style";

/**
 * @author
 * @function SearchGrid
 **/

const SearchGrid = ({ movies }) => {
  return (
    <SearchGrids>
      <ul>
        {movies.map((movie) => {
          return (
            <Link to={`/movies/${movie.id}`}>
              <li key={movie.id}>
                <figure>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                  />
                </figure>
                {movie.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </SearchGrids>
  );
};

export default SearchGrid;
