import React, { Fragment } from "react";
import { Card, Figure } from "react-bootstrap";
import { Link } from "react-router-dom";

/**
 * @author
 * @function MoviesItem
 **/

const MoviesItem = ({ movie }) => {
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
          </Card.Body>
        </Link>
      </Card>
    </Fragment>
  );
};

export default MoviesItem;
