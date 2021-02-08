import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import Description from "./pages/Description";
import Home from "./pages/Home";

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
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/description">
          <Description />
        </Route>
        <Route>
          <h1>404: PAGE NOT FOUND!</h1>
        </Route>
      </StyledFrag>
    </Switch>
  );
}

App.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default App;
