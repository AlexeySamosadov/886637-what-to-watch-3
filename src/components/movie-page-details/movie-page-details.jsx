import React from "react";
import PropTypes from "prop-types";
import {formatMovieDuration} from "../util/util.js";
import {changeFirstLetterUppercase} from "../util/util";

const MoviePageDetails = ({filmData}) => {
  const {actors, directors, genre, date, duration} = filmData;
  const genreTransferred = changeFirstLetterUppercase(genre);
  const movieDuration = formatMovieDuration(duration);
  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{directors}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {actors.join(`                                  `)}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{movieDuration}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genreTransferred}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{date}</span>
        </p>
      </div>
    </div>
  );
};

MoviePageDetails.propTypes = {
  filmData: PropTypes.shape({
    actors: PropTypes.array.isRequired,
    directors: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  }).isRequired,
};

export default MoviePageDetails;
