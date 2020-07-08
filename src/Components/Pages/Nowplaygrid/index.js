import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BannerWrapper } from "../../Homepage/Nowplaying/style";
import Axios from "axios";
import { DefaultPegination } from "./style";
import { tmdb_api_url, tmdb_api_key } from "../../../../src/config";
import Pagination from "../../Pagination";
/**
 * @author
 * @function Nowplaygrid
 **/

const Nowplaygrid = ({ Props }) => {
  const [movieLists, setMovieLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    Axios.get(
      `${tmdb_api_url}/movie/now_playing?api_key=${tmdb_api_key}&language=en-US&page=${currentPage}`
    )
      .then((res) => {
        console.log(res.data);
        setTotalPages(res.data.total_pages);
        setMovieLists(res.data.results);
      })
      .catch((err) => console.error(err));
  }, [currentPage]);

  const nextHandler = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const preHandler = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      alert("this is first page Please click the Next button");
    }
  };

  const pageItem = (rangeWithDot) => {
    setCurrentPage(rangeWithDot);
  };

  return (
    <BannerWrapper>
      <Container className="mt-5">
        <div className="clearfix mt-5 mb-2">
          <h3 className="float-left">Now playing</h3>
        </div>
        <Row>
          {movieLists.map((movieList) => {
            return (
              <Col key={movieList.id} md="3" className="mb-3">
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
        <DefaultPegination className="clearfix mt-5 mb-2">
          <Button onClick={preHandler}>Prev</Button>
          <Button onClick={nextHandler}>Next</Button>
        </DefaultPegination>
        {movieLists.length > 0 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            pageItem={pageItem}
          />
        )}
      </Container>
    </BannerWrapper>
  );
};

export default Nowplaygrid;
