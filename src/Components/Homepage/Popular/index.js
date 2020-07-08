import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

import { BannerWrapper } from "../Nowplaying/style";
import { Link } from "react-router-dom";
import MoviesSlider from "../../Commons/MoviesSlider";

/**
 * @author
 * @function Popular
 **/

const Popular = ({ states }) => {

  return (
    <Fragment>
      <BannerWrapper>
        <Container>
          <div className="clearfix mt-5 mb-2">
            <h3 className="float-left">Popular</h3>
            <Link to="/" className="float-right text-uppercase">
              see all
            </Link>
          </div>
          <MoviesSlider movies={states} />
        </Container>
      </BannerWrapper>
    </Fragment>
  );
};

export default Popular;
