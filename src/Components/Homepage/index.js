import React, { useState, useEffect, Fragment } from "react";
import style from "styled-components";
import axios from "axios";
import Nowplaying from "./Nowplaying";
import Popular from "./Popular";

/**
 * @author
 * @function Homepege
 **/

const Homepege = (props) => {
  const [nowPlaying, setnowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRate, settopRate] = useState([]);
  useEffect(() => {
    getAllMovies();
  }, []);
  const getAllMovies = async () => {
    const apikey = "8dcc478bc8ac0518dd5d7b133c69b56b";
    const datas = await axios.all([
      axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US&page=1`
      ),
      axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`
      ),
      axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`
      ),
    ]);
    console.log(datas[1].data.results);
    setnowPlaying(datas[0].data.results);
    setPopular(datas[1].data.results);
    settopRate(datas[2].data.results);
  };

  return (
    <Fragment>
      <Nowplaying movies={nowPlaying} />
      <Popular states={popular} />
    </Fragment>
  );
};

export default Homepege;
