import React from "react";
import Wrapper from "./../../Wrapper";
import { Container, Form } from "react-bootstrap";
import { FormWrap } from "./../ForgetPws/style";

/**
 * @author
 * @function SignUp
 **/

const SignUp = (props) => {
  return (
    <Wrapper {...props}>
      <Container>
        <FormWrap>
          <Form>
            <h1>Sign Up Form</h1>
            <Form.Group>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <input type="submit" value="Sign Up" />
          </Form>
        </FormWrap>
      </Container>
    </Wrapper>
  );
};

export default SignUp;
