import React from "react";
import { actors } from "../data";

function Actors() {
  let actors1 = actors.map((actor) => (
    <div key={actor.name}>
      <h2>{actor.name}</h2>
      <ul>
        {actor.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div className="navbar">
      <h1>Actors Page</h1>
      <>{actors1}</>
    </div>
  );
}

export default Actors;
