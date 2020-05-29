import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MoviesItem from "../MoviesItem";

/**
 * @author
 * @function MoviesLists
 **/

const MoviesLists = ({ moviesItems }) => {
  return (
    <Fragment>
      <Container>
        <Row>
          {moviesItems.map((movie) => (
            <Col className="col-3">
              <MoviesItem movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default MoviesLists;
