import React, { Fragment, useState } from "react";
import MoviesLists from "../../Commons/MoviesLists";
import Wrapper from "../../Wrapper";

/**
 * @author
 * @function SearchResult
 **/

const SearchResult = (props) => {
  const [query, setQuery] = useState();

  console.log(props);
  return (
    <Wrapper {...props}>
      <div className="mb-5 mt-5">
        <MoviesLists moviesItems={props.location.state.moviesItems} />
      </div>
    </Wrapper>
  );
};

export default SearchResult;
