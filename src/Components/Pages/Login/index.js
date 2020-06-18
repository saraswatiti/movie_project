import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { PopUpSection, PopUpWrapper } from "./style";
/**
 * @author
 * @function Login
 **/

const Login = ({ closeModel }) => {
  // closeBtn = () => {
  //   window.location.reload();
  // };
  return (
    <PopUpSection>
      <PopUpWrapper>
        <a href="javascript:void(0);" onClick={closeModel}>
          <FaWindowClose />
        </a>
        <form>
          <input type="text" placeholder="FullName" />
          <input type="email" name="email" id="email" placeholder="Email" />
          <input
            type="password"
            name="password"
            id="Password"
            placeholder="Password"
          />
          <input type="submit" value="Login" />
        </form>
      </PopUpWrapper>
    </PopUpSection>
  );
};

export default Login;
