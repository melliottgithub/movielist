import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MainPageLayout from "../../components/MainPageLayout";
import { API_KEY, API_URL, SEARCH_BASE_URL } from "../../data";

const initialState = "";
const initialArrState = [];

const Home = () => {
  const [input, setInput] = useState(initialState);
  const [list, setList] = useState(initialArrState);

  const handleOnInput = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleOnCLick = () => {
    fetch(`${SEARCH_BASE_URL}${input}`)
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  const handleOnEnter = (e) => {
    console.log(e.keyCode);
    if (e.keyCode === 13) handleOnCLick();
  };

  return (
    <MainPageLayout>
      <input
        value={input}
        placeholder="Search"
        type="text"
        onChange={handleOnInput}
      ></input>
      <button type="button" onKeyDown={handleOnEnter} onClick={handleOnCLick}>
        GO!
      </button>
    </MainPageLayout>
  );
};

Home.propTypes = {};

export default Home;
