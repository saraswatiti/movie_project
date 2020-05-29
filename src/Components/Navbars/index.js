import React, { Fragment, useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navwrapper } from "./style";
import { Link, Redirect } from "react-router-dom";
import { tmdb_api_url, tmdb_api_key } from "../../config";
import Search from "../Search";
import axios from "axios";
import MoviesLists from "../Commons/MoviesLists";
/**
 * @author
 * @function Navbars
 **/

const Navbars = (props) => {
  const [SearchIteams, setSearchIteams] = useState([]);
  const [searchkey, setSearchKey] = useState();

  const submitHandle = (evt) => {
    evt.preventDefault();
    axios
      .get(
        `${tmdb_api_url}/search/movie?api_key=${tmdb_api_key}&query=${searchkey}`
      )
      .then((res) => {
        setSearchIteams(res.data.results);
      })
      // .then((res) => {
      //   // setSearchIteams(res.data.results)
      //   console.log(res.data);
      //   return <Redirect push to="/pages/search_result" />;
      // })
      .catch((err) => console.error(err));
  };

  const inputHandle = (evt) => {
    setSearchKey(evt.target.value);
  };

  return (
    <Fragment>
      <Navwrapper>
        <Container>
          <Navbar expand="lg">
            <Link to="/">
              <img src={require("./../../assets/img/logo.svg")} alt="logo" />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Search submitHandle={submitHandle} inputHandle={inputHandle} />

              <Nav className="ml-auto">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/movies" className="nav-link">
                  movies
                </Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Navwrapper>
      <MoviesLists moviesItems={SearchIteams} />
    </Fragment>
  );
};

export default Navbars;
