import React, { Fragment } from "react";
import { Container, Row, Card, Col, Figure } from "react-bootstrap";

import { BannerWrapper } from "./style";
import { Link } from "react-router-dom";
import MoviesLists from "../../Commons/MoviesLists";
import MoviesSlider from "../../Commons/MoviesSlider";
import MoviesItem from "../../Commons/MoviesItem";

/**
 * @author
 * @function Nowplaying
 **/

const Nowplaying = ({ movies }) => {
  return (
    <Fragment>
      <BannerWrapper>
        <Container>
          <div className="clearfix mt-5 mb-2">
            <h2 className="float-left">Now playing</h2>
            <Link
              to={{ pathname: "/commons/MoviesLists", movies: { movies } }}
              className="float-right text-uppercase"
            >
              see all
            </Link>
          </div>
          <MoviesSlider movies={movies} />
        </Container>
      </BannerWrapper>
    </Fragment>
  );
};

export default Nowplaying;
