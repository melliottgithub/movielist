import React from "react";
import PropTypes from "prop-types";
import Navs from "../Navs";
import Title from "../Title";

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title title="Movie List" subtitle="Pick the movie you want" />
      <Navs />
      {children}
    </div>
  );
};

MainPageLayout.propTypes = {};

export default MainPageLayout;
