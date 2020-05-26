import React, { Fragment, useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Form, FormControl } from "react-bootstrap";
/**
 * @author
 * @function Search
 **/

const Search = ({ submitHandle, inputHandle }) => {
  return (
    <Fragment>
      <Form inline onSubmit={submitHandle}>
        <FaSearch />
        <FormControl
          type="text"
          placeholder="Search"
          className=" mr-sm-2"
          onChange={inputHandle}
        />
        {/* <Button type="submit">Submit</Button> */}
      </Form>
    </Fragment>
  );
};

export default Search;
