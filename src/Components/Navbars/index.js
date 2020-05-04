import React, { Fragment } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navwrapper } from "./style";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
/**
 * @author
 * @function Navbars
 **/

const Navbars = (props) => {
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
              <Form inline>
                <FaSearch />
                <FormControl
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
                {/* <Button type="submit">Submit</Button> */}
              </Form>
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
    </Fragment>
  );
};

export default Navbars;
