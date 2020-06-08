import React, { useState, useEffect } from "react";
import axios from "axios";
import MoviesLists from "../../Commons/MoviesLists";
import { tmdb_api_key, tmdb_api_url } from "./../../../config";
import Wrapper from "../../Wrapper";
import Notfound from "../../Notfound";

/**
 * @author
 * @function Nowplaying
 **/

const Nowplaying = (props) => {
  const [movieLists, setMovieLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    axios
      .get(
        `${tmdb_api_url}/movie/now_playing?api_key=${tmdb_api_key}&language=en-US&page=${currentPage}`
      )
      .then((res) => {
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
    <Wrapper {...props}>
      <div className="mb-5 mt-5">
        {movieLists.length > 0 ? (
          <MoviesLists moviesItems={movieLists} />
        ) : (
          <Notfound />
        )}
      </div>
    </Wrapper>
  );
};

export default Nowplaying;
