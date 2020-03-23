import React from "react";
import PropTypes from "prop-types";

const FilmCard = ({src, name, handleMouseOver}) => {
  return (
    <article onMouseOver={() => {
      handleMouseOver(name);
    }
    } className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={`img/${src}`} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
    // <div name={name} src={src} onMouseOver={onMouseOver}>{name}</div>
  );


};

FilmCard.propTypes = {
  handleMouseOver: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FilmCard;
