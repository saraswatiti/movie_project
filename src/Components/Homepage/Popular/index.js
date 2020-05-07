import React, { Fragment } from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BannerWrapper } from "../Nowplaying/style";
import { Link } from "react-router-dom";

/**
 * @author
 * @function Popular
 **/

const Popular = ({ states }) => {
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
            <h3 className="float-left">Popular</h3>
            <Link to="/" className="float-right text-uppercase">
              see all
            </Link>
          </div>
          <Slider {...settings}>
            {states.map((state) => {
              return (
                <Fragment>
                  <Col>
                    <Link to={`/movies/${state.id}`}>
                      <Card>
                        <Card.Img
                          variant="top"
                          src={`https://image.tmdb.org/t/p/w500/${state.poster_path}`}
                        />
                        <Card.Body>
                          <h3>{state.title}</h3>
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

export default Popular;
