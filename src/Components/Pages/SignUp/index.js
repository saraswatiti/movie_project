import React, { useState } from "react";
import Wrapper from "./../../Wrapper";
import { Container, Form } from "react-bootstrap";
import { FormWrap } from "./../ForgetPws/style";
import axios from "axios";
import { tmdb_api_key, tmdb_api_url } from "./../../../config";
/**
 * @author
 * @function SignUp
 **/

const SignUp = (props) => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistor = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    axios.post(`${tmdb_api_url}/authentication/token/new?api_key=${tmdb_api_key}`, { userName, password, email })
      .then((res) => {
        setSuccessful(true);
      })
      .catch((err) => {
        err.res && err.res.data && err.toString();
        setMessage();
        setSuccessful(false);
      });
  };

  return (
    <Wrapper {...props}>
      <Container>
        <FormWrap>
          <Form onSubmit={handleRegistor}>
            <h1>Sign Up Form</h1>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="UserName"
                onChange={onChangeUserName}
              />
            </Form.Group>
            {/* <Form.Group>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group> */}
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={onChangeEmail}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={onChangePassword}
              />
            </Form.Group>
            {/* <Form.Group>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group> */}
            <input type="submit" value="Sign Up" />
          </Form>
        </FormWrap>
      </Container>
    </Wrapper>
  );
};

export default SignUp;
