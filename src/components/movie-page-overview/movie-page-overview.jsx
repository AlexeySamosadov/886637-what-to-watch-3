import React from "react";
import PropTypes from "prop-types";

const MoviePageOverview = ({filmData}) => {
  const {ratingLevel, ratingCount, directors, actors, description} = filmData;
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">8,9</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingLevel}</span>
          <span className="movie-rating__count">{ratingCount} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {directors}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {actors.join(`, `)}</strong></p>
      </div>
    </React.Fragment>
  );
};

MoviePageOverview.propTypes = {
  filmData: PropTypes.shape({
    ratingCount: PropTypes.number.isRequired,
    ratingLevel: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    actors: PropTypes.array.isRequired,
    directors: PropTypes.string.isRequired,
  }).isRequired,
};

export default MoviePageOverview;