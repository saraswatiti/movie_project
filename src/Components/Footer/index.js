import React from "react";
import { Copyright } from "./style";
import { Link } from "react-router-dom";

/**
 * @author
 * @function Footer
 **/

const Footer = (props) => {

  return (
    <div>
      <Copyright>
        Made by
        <Link to="https://github.com/saraswatiti">Saraswati Timsina</Link>
      </Copyright>
    </div>
  );
};

export default Footer;
