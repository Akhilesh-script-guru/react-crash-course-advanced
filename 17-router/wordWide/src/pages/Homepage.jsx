import React from "react";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <>
      <div>Homepage</div>
      <li>
        go to producct
        <Link to="/product">go to product</Link>
      </li>
    </>
  );
}

export default Homepage;
