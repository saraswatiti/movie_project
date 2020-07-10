import React, { Fragment, useState, useEffect } from "react";
import MoviesLists from "../../Commons/MoviesLists";
import Wrapper from "../../Wrapper";
import axios from "axios";
import { tmdb_api_url, tmdb_api_key } from "./../../../config";
import Notfound from "../../Notfound";
const qs = require("qs");

/**
 * @author
 * @function SearchResult
 **/

const SearchResult = (props) => {
  const [movieLists, setMovieLists] = useState([]);

  useEffect(() => {
    let queryObj = qs.parse(props.location.search, { ignoreQueryPrefix: true });
    if (!queryObj.q) {
      props.history.push("/");
      return;
    }
    axios.get(`${tmdb_api_url}/search/movie?api_key=${tmdb_api_key}&query=${queryObj.q}`)
      .then((res) => setMovieLists(res.data.results))
      .catch((err) => console.error(err));
  }, [props.location.search]);

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

export default SearchResult;
