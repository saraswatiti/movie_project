import React, { Fragment } from "react";

/**
 * @author
 * @function Pagination
 **/

const Pagination = ({ totalPages }) => {
  let links = [];
  console.log(totalPages);
  for (let i = 1; i <= totalPages; i++) {
    links.push(<li key={i} className="page-item">
      <a href="" className="page-link">
        {i}
      </a>
    </li>)

  }
  console.log(links);
  return (
    <Fragment>

      <ul className="pagination">

        {links}
      </ul>
    </Fragment>
  );
};

export default Pagination;
