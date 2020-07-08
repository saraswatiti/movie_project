import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { PopUpSection, PopUpWrapper } from "./style";
import { Form, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { tmdb_api_url, tmdb_api_key } from "../../../config";
/**
 * @author
 * @function Login
 **/

const Login = ({ closeModel: closeModel, ...props }) => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState();

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .get(`${tmdb_api_url}/authentication/token/new?api_key=${tmdb_api_key}`)
      .then((res) => console.log(res.data));
  };

  return (
    <PopUpSection>
      <PopUpWrapper>
        <a href="#" onClick={closeModel} className="float-right">
          <FaWindowClose />
        </a>
        <h1>Log in Form</h1>
        <p>
          <strong>Welcome back</strong>,Please login to your account OR
          <Link to="/signup" className="signupbtn">
            Sign Up
          </Link>
        </p>
        <Form onSubmit={handleLogin} token={token}>
          <Form.Group>
            <Form.Control
              type="email"
              placeholder="UserName"
              onChange={onChangeUserName}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={onChangePassword}
            />
          </Form.Group>
          <Form.Group>
            <Form.Check type="checkbox" label="Remember me" />
            <Link to="/password-change" className="float-right">
              Forget Password
            </Link>
          </Form.Group>
          <input type="submit" value="Login" />
          <input type="submit" value="SIGN IN WITH GOOGLE" />
        </Form>
      </PopUpWrapper>
    </PopUpSection>
  );
};

export default Login;
