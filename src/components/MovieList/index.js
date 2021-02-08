import React from "react";

const MovieList = ({ movie }) => {
  const { title } = movie;
  return (
    <ul>
      <li>{title}</li>
    </ul>
  );
};

export default MovieList;
