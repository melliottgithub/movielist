import React from "react";
import PropTypes from "prop-types";
import Navs from "../Navs";
import Title from "../Title";

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Navs />
      <Title
        // key={Math.random()}
        title="Movie List"
        subtitle="Pick the movie you want"
      />
      {children}
    </div>
  );
};

MainPageLayout.propTypes = {};

export default MainPageLayout;
