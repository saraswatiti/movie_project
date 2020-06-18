import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { PopUpSection, PopUpWrapper } from "./style";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
/**
 * @author
 * @function Login
 **/

const Login = ({ closeModel }) => {
  return (
    <PopUpSection>
      <PopUpWrapper>
        <a
          href="javascript:void(0);"
          onClick={closeModel}
          className="float-right"
        >
          <FaWindowClose />
        </a>
        <h1>Log in Form</h1>
        <p>
          <strong>Welcome back</strong>,Please login to your account OR
          <Link to="/signup" className="signupbtn">
            Sign Up
          </Link>
        </p>
        <Form>
          <Form.Group>
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="password" placeholder="Password" />
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
