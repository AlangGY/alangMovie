import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

const Movie = ({ title, year, summary, poster, genres }) => (
  <div className="movie">
    <img src={poster} alt={title} className="movie_poster"></img>
    <div className="movie_data">
      <h1 className="movie__title">{title}</h1>
      <ul className="movie__genres">
        {genres.map((genre, index) => (
          <li className="genres__genre" key={index}>
            {genre}
          </li>
        ))}
      </ul>
      <h2 className="movie__year">{year}</h2>
      <h3 className="movie__summary">{summary.slice(0, 400)}...</h3>
    </div>
  </div>
);

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
