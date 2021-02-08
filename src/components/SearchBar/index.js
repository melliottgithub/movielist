import React from "react";
import PropTypes from "prop-types";

const Searchbar = ({ setQuery }) => {
  const handleOnChange = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <input onChange={handleOnChange} type="Search"></input>
      <button>Go!</button>
    </div>
  );
};

Searchbar.propTypes = {};

export default Searchbar;
