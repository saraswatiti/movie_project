import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BannerWrapper } from "../../Homepage/Nowplaying/style";
import Axios from "axios";
/**
 * @author
 * @function Nowplaygrid
 **/

const Nowplaygrid = ({ Props }) => {
  const [movieLists, setmovieLists] = useState([]);
  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=8dcc478bc8ac0518dd5d7b133c69b56b&language=en-US&page=1`
    ).then((res) => setmovieLists(res.data.results));
  }, []);
  return (
    <BannerWrapper>
      <Container className="mt-5">
        <div className="clearfix mt-5 mb-2">
          <h3 className="float-left">Now playing</h3>
        </div>
        <Row>
          {movieLists.map((movieList) => {
            return (
              <Col key={movieList.id} md="4" className="mb-2">
                <Link to={`/movies/${movieList.id}`}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w500/${movieList.poster_path}`}
                    />
                    <Card.Body>
                      <h3>{movieList.title}</h3>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
        <div className="clearfix mt-5 mb-2">
          <Link to="/" className="float-right text-uppercase">
            Next
          </Link>
        </div>
      </Container>
    </BannerWrapper>
  );
};

export default Nowplaygrid;
