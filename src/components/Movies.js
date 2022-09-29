import React from "react";
import { movies } from "../data";

function Movies() {
  let Movies = movies.map((movie) => (
    <div key={movie.time}>
      <h2>{movie.title}</h2>
      <p>Time: {movie.time}</p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div className="navbar">
      <h1>Movies Page</h1>
      <>{Movies}</>
    </div>
  );
}

export default Movies;
