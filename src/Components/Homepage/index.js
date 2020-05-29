import React, { useState, useEffect, Fragment } from "react";
import style from "styled-components";
import { tmdb_api_url, tmdb_api_key } from "../../../src/config";
import axios from "axios";
import Nowplaying from "./Nowplaying";
import Popular from "./Popular";
import MoviesLists from "../Commons/MoviesLists";
import { Row, Container } from "react-bootstrap";

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
    console.log(datas[1].data.results);
    setnowPlaying(datas[0].data.results);
    setPopular(datas[1].data.results);
    settopRate(datas[2].data.results);
    setNowplayGrid(datas[0].data.results);
  };

  return (
    <Fragment>
      <Container>
        <Nowplaying movies={nowPlaying} />
        <Popular states={popular} />

        <MoviesLists moviesItems={topRate} />
      </Container>
    </Fragment>
  );
};

export default Homepege;
