import React, { Fragment } from "react";
// import { Link } from "react-router-dom";

/**
 * @author
 * @function Pagination
 **/

const Pagination = ({ totalPages, pageItem, currentPage }) => {
  let delta = 2;
  let left = currentPage - delta;
  let right = currentPage + delta + 1;
  let ranges = [];
  let rangeWithDot = [];
  let l;
  for (let i = 1; i <= totalPages; i++) {
    if (i == 1 || i == totalPages || (i >= left && i < right)) {
      ranges.push(i);
    }
  }
  console.log(ranges);
  for (let i of ranges) {
    if (l) {
      if (i - l === 2) {
        rangeWithDot.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDot.push("...");
      }
    }
    rangeWithDot.push(i);
    l = i;
  }
  console.log(rangeWithDot);

  return (
    <ul className="pagination">
      {rangeWithDot.map((i) => (
        <li key={i} className="page-item">
          <button onClick={() => pageItem(i)} className="page-link">
            {i}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
