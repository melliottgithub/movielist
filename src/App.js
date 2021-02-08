import styled from "styled-components";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import PropTypes from "prop-types";

const StyledFrag = styled.div`
  background-color: white;
  text-align: center;
`;

function App({ movies }) {
  return (
    <StyledFrag>
      <Header />
      {movies.map((movie, index) => (
        <MovieList key={index} movie={movie} />
      ))}
    </StyledFrag>
  );
}

App.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default App;
