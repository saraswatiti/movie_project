import React, { Fragment } from "react";
import { Card, Figure } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

/**
 * @author
 * @function MoviesItem
 **/

const MoviesItem = ({ movie }) => {
  const getYear = (date) => {
    if (!date) {
      return;
    }
    return date.split("-")[0];
  };
  return (
    <Fragment>
      <Card>
        <Link to={`/movies/${movie.id}`}>
          <Figure>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          </Figure>
          <Card.Body>
            <h3>{movie.title}</h3>
            <div className="movie-content">
              <span>{getYear(movie.release_date)}</span>
              <span className="float-right">
                <FaHeart />
              </span>
            </div>
          </Card.Body>
        </Link>
      </Card>
    </Fragment>
  );
};

export default MoviesItem;
