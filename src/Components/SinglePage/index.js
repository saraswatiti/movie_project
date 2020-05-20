import React, { useEffect, useState } from "react";
import Axios from "axios";
import { tmdb_api_url, tmdb_api_key } from "../../../src/config";
import { Container, Row, Col } from "react-bootstrap";
import { FcRating, FcLike } from "react-icons/fc";
import { SinglepageWrap, Release } from "./style";
/**
 * @author
 * @function SinglePage
 **/

const SinglePage = (props) => {
  const [SingleMovie, setSingleMovie] = useState({});
  useEffect(() => {
    Axios.get(
      `
      ${tmdb_api_url}/movie/${props.match.params.id}?api_key=${tmdb_api_key}&language=en-US`
    )
      .then((res) => setSingleMovie(res.data))
      .catch((err) => console.error(err));
  }, [props.match.params.id]);

  return (
    <SinglepageWrap key={SingleMovie.id}>
      <Container className="mt-5">
        <Row>
          <Col md="6">
            <img
              src={`https://image.tmdb.org/t/p/w500/${SingleMovie.poster_path}`}
              alt=""
            ></img>
          </Col>
          <Col md="6">
            <div className="mb-2">
              {Array.isArray(SingleMovie.genres) &&
                SingleMovie.genres.map((cat) => (
                  <span className="px-3 pb-1 mr-2">{cat.name}</span>
                ))}
            </div>

            <h2 className="mb-3">{SingleMovie.title}</h2>
            <Release className="mb-2">{SingleMovie.status}</Release>
            <div className="mb-2">release date:{SingleMovie.release_date}</div>
            <p>{SingleMovie.overview}</p>
            <p>Original language: {SingleMovie.original_language}</p>
            <ul>
              <li>
                <FcRating />
                {SingleMovie.vote_average}
              </li>
              <li>
                <FcLike />
                {SingleMovie.popularity}
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </SinglepageWrap>
  );
};

export default SinglePage;
