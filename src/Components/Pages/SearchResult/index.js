import React, { Fragment } from "react";
import MoviesLists from "../../Commons/MoviesLists";
import { SearchConsumer } from "../../../Context";

/**
 * @author
 * @function SearchResult
 **/

const SearchResult = (props) => {
  console.log("hi");
  return (
    <SearchConsumer>
      {(data) => {
        console.log(data);

        return <MoviesLists moviesItems={data} />;
      }}
    </SearchConsumer>
  );
};

export default SearchResult;
