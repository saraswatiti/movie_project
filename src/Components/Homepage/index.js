import React, { useState, useEffect, Fragment } from "react";
import style from "styled-components";
import { tmdb_api_url, tmdb_api_key } from "../../../src/config";
import axios from "axios";
import MoviesLists from "../Commons/MoviesLists";
import { Row, Container, Button } from "react-bootstrap";
import Wrapper from "../Wrapper";
import MoviesSlider from "../Commons/MoviesSlider";
import { BannerWrapper } from "./Nowplaying/style";
import { Link } from "react-router-dom";
import { SectionWrapper } from "../Homepage/style";

/**
 * @author
 * @function Homepege
 **/

const Homepege = (props) => {
  const [nowPlaying, setnowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRate, settopRate] = useState([]);
  const [NowplayGrid, setNowplayGrid] = useState([]);

  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovies = async () => {
    const datas = await axios.all([
      axios.get(
        `${tmdb_api_url}/movie/now_playing?api_key=${tmdb_api_key}&language=en-US&page=1`
      ),
      axios.get(
        `${tmdb_api_url}/movie/popular?api_key=${tmdb_api_key}&language=en-US&page=1`
      ),
      axios.get(
        `${tmdb_api_url}/movie/top_rated?api_key=${tmdb_api_key}&language=en-US&page=1`
      ),
    ]);

    setnowPlaying(datas[0].data.results);
    setPopular(datas[1].data.results);
    settopRate(datas[2].data.results);
    setNowplayGrid(datas[0].data.results);
  };

  const handleClick = () => {
    props.history.push("/nowplaying");
  };

  return (
    <Wrapper {...props}>
      <BannerWrapper>
        <Container>
          <div className="clearfix mt-5 mb-2">
            <h2 className="float-left">Now playing</h2>
            <Link to="/nowplaying" className="float-right text-uppercase">
              see all
            </Link>
          </div>
          <MoviesSlider movies={nowPlaying} />
          <div className="clearfix mt-5 mb-2">
            <h2 className="float-left">Now Popular</h2>
            <Link to="/" className="float-right text-uppercase">
              see all
            </Link>
          </div>
          <MoviesSlider movies={popular} />
          <div className="clearfix mt-5 mb-2">
            <h2 className="float-left">Most Popular</h2>
          </div>
          {Array.isArray(topRate) ? (
            <SectionWrapper>
              <MoviesLists moviesItems={topRate.slice(0, 8)} />
              <Button onClick={handleClick}>Load More</Button>
            </SectionWrapper>
          ) : (
              <MoviesLists moviesItems={topRate} />
            )}
        </Container>
      </BannerWrapper>
    </Wrapper>
  );
};

export default Homepege;
