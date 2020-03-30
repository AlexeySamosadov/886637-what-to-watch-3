import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";


const FilmsList = ({filmsData, onTitleClick}) => {
  return filmsData.map((filmData) => (
    <FilmCard
      key={filmData.id}
      filmData={filmData}
      onTitleClick={onTitleClick}
    />
  )
  );
};

FilmsList.propTypes = {
  filmsData: PropTypes.arrayOf(PropTypes.shape({})),
  onTitleClick: PropTypes.func.isRequired,
};

export default FilmsList;
