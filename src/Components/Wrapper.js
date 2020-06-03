import React from "react";
import Header from "./Header";

/**
 * @author
 * @function Wrapper
 **/

const Wrapper = (props) => {
  return (
    <>
      <Header {...props} />
      {props.children}
    </>
  );
};

export default Wrapper;
