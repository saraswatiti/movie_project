import React, { Fragment } from "react";
import { Container, Row, Card, Col, Figure } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BannerWrapper } from "./style";
import { Link } from "react-router-dom";

/**
 * @author
 * @function Nowplaying
 **/

const Nowplaying = ({ movies }) => {
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
      <BannerWrapper>
        <Container>
          <div className="clearfix mt-5 mb-2">
            <h2 className="float-left">Now playing</h2>
            <Link
              to="/pages/Nowplaygrid"
              className="float-right text-uppercase"
            >
              see all
            </Link>
          </div>
          <Slider {...settings}>
            {movies.map((movie) => {
              return (
                <Fragment key={movie.id}>
                  <Col>
                    <Link to={`/movies/${movie.id}`}>
                      <Card key={movie.id}>
                        <Figure>
                          <Card.Img
                            variant="top"
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          />
                        </Figure>
                        <Card.Body>
                          <h3>{movie.title}</h3>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                </Fragment>
              );
            })}
          </Slider>
        </Container>
      </BannerWrapper>
    </Fragment>
  );
};

export default Nowplaying;
