import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import { APIURL, SEARCHAPI } from "./apis_file";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    fetch(APIURL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      fetch(SEARCHAPI + searchTerm)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });
      setsearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setsearchTerm(e.target.value);
  };

  return (
    <div className="movies-container">
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            placeholder="search..."
            value={searchTerm}
            onChange={handleOnChange}
          ></input>
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie {...movie} key={movie.id} />)}
      </div>
    </div>
  );
}

export default App;
