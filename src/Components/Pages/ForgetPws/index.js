import React from "react";
import Wrapper from "../../Wrapper";
import { Form, InputGroup, Container } from "react-bootstrap";
import { FormWrap } from "./style";

/**
 * @author
 * @function ForgetPws
 **/

const ForgetPws = (props) => {

  return (
    <Wrapper {...props}>
      <Container>
        <FormWrap>
          <h1>Password Change</h1>
          <Form>
            <Form.Group>
              <Form.Control type="password" placeholder="New Password" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <input type="submit" value="Change Password" />
          </Form>
        </FormWrap>
      </Container>
    </Wrapper>
  );
};

export default ForgetPws;
