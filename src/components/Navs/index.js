import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LINKS = [
  { to: "/", text: "Home" },
  { to: "/description", text: "Description" },
];

const Navs = () => {
  return (
    <div>
      <ul>
        {LINKS.map(({ to, text }, index) => (
          <li key={index}>
            <Link to={to}>{text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Navs.propTypes = {};

export default Navs;
