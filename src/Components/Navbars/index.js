import React, { Fragment, useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navwrapper } from "./style";
import { Link, Redirect } from "react-router-dom";
import { tmdb_api_url, tmdb_api_key } from "../../config";
import Search from "../Search";
import axios from "axios";
import { FaLock } from "react-icons/fa";
import { RegistorWrapper } from "../Homepage/style";
import Debounce from "../../Debounce";
const qs = require("qs");

/**
 * @author
 * @function Navbars
 **/

const Navbars = (props) => {
  // const [SearchIteams, setSearchIteams] = useState([]);
  const [searchkey, setSearchKey] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [reqToken, setReqToken] = useState(true);

  const debouncedSearchTerm = Debounce(searchkey, 500);
  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      inputHandle(debouncedSearchTerm).then((results) => {
        setIsSearching(false);
        setSearchKey(results);
      });
    } else {
      setSearchKey([]);
    }
  }, [debouncedSearchTerm]);

  const submitHandle = (evt) => {
    evt.preventDefault();
    props.history.push({
      pathname: "/search",
      search: `?q=${searchkey}`,
    });
  };

  const inputHandle = (evt) => {
    setSearchKey(evt.target.value);
  };

  //for login
  useEffect(() => {
    let queryObj = qs.parse({
      ignoreQueryPrefix: true,
    });
    const ObjToken = axios.post(
      `https://api.themoviedb.org/3/authentication/session/new?api_key=8dcc478bc8ac0518dd5d7b133c69b56b`,
      { request_token: queryObj.request_token }
    );
    setReqToken(false);
    console.log(ObjToken);
  }, [reqToken]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `${tmdb_api_url}/authentication/token/new?api_key=${tmdb_api_key}`
    );
    console.log(res);
    const { request_token } = res.data;
    console.log(request_token);
    window.location = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=https://saraswatiti.github.io/movie_project/#/`;
  };
  return (
    <Navwrapper>
      <Container>
        <Navbar expand="lg">
          <Link to="/">
            <img src={require("./../../assets/img/logo.svg")} alt="logo" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {isSearching && (
              <Search submitHandle={submitHandle} inputHandle={inputHandle} />
            )}

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
              <a href="#" onClick={handleLogin}>
                <RegistorWrapper>
                  <FaLock />
                </RegistorWrapper>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Navwrapper>
  );
};

export default Navbars;
