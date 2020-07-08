import React from "react";
import Navbars from "../Navbars";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {

  return (
    <div className="main-header">
      <Navbars {...props} />
    </div>
  );
};

export default Header;
