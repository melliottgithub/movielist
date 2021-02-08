import React, { useState } from "react";
import PropTypes from "prop-types";
import MainPageLayout from "../../components/MainPageLayout";

const initialState = "";

const Home = () => {
  const [input, setInput] = useState(initialState);

  const handleOnInput = (e) => {
    const value = e.target.value;
    setInput(value);
    console.log(value);
  };

  const handleOnCLick = () => {
    console.log("I GOT IT ROSE!!!");
    console.log(input);
  };

  return (
    <MainPageLayout>
      <input
        value={input}
        placeholder="Search"
        type="text"
        onChange={handleOnInput}
      ></input>
      <button type="button" onClick={handleOnCLick}>
        GO!
      </button>
    </MainPageLayout>
  );
};

Home.propTypes = {};

export default Home;
