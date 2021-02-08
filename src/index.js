import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import movies from "./data";


ReactDOM.render(<App movies={movies}/>, document.getElementById("root"));
