import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LINKS = [
  { to: "/", text: "Home" },
  { to: "/description", text: "Description" },
];

const Navs = (props) => {
  return (
    <div>
      <ul>
        {LINKS.map(({ to, text }) => (
          <li>
            <Link to={to}>{text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Navs.propTypes = {};

export default Navs;
