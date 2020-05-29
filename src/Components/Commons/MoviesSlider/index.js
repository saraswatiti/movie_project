import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MoviesItem from "../MoviesItem";
import { Col } from "react-bootstrap";
/**
 * @author
 * @function MoviesSlider
 **/

const MoviesSlider = ({ movies }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: true,
  };
  return (
    <Fragment>
      <Slider {...settings}>
        {movies.map((movie) => (
          <Col>
            <MoviesItem movie={movie} />
          </Col>
        ))}
      </Slider>
    </Fragment>
  );
};

export default MoviesSlider;
