import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import movies from "./data";

ReactDOM.render(
  <BrowserRouter>
    <App movies={movies} />
  </BrowserRouter>,
  document.getElementById("root")
);
