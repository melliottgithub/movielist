import { useState } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import PropTypes from "prop-types";
import Searchbar from "./components/SearchBar";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

const StyledFrag = styled.div`
  background-color: white;
  text-align: center;
`;
const initialStingState = "";

function App({ movies }) {
  const [query, setQuery] = useState(initialStingState);

  return (
    <Switch>
      <StyledFrag>
        <Route exact path="/" />
        <Route exact path="/description" />
        <Route />
        <Header />
        <Searchbar setQuery={setQuery} />
        {movies.map((movie, index) => (
          <MovieList key={index} movie={movie} />
        ))}
      </StyledFrag>
    </Switch>
  );
}

App.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default App;
