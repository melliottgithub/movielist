import React from "react";
import PropTypes from "prop-types";

const Title = ({ title, subtitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

Title.propTypes = {};

export default Title;
