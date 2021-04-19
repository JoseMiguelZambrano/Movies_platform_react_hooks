import React from "react";
import { IMGPATH } from "../apis_file";

const setVoteClass = (vote) => {
  if (vote <= 3.3) {
    return "red";
  } else if (vote > 3.3 && vote <= 6.6) {
    return "orange";
  } else {
    return "green";
  }
};

const Movie = ({ title, overview, vote_average, poster_path }) => (
  <div className="movie">
    <img src={IMGPATH + poster_path} alt={title}></img>
    <div className="movie-info">
      <h3>{title}</h3>
      <span className={`tag ${setVoteClass(vote_average)}`}>
        {vote_average}
      </span>
    </div>
    <div className="movie-over">
      <h2>overview</h2>
      <p>{overview}</p>
    </div>
  </div>
);

export default Movie;
