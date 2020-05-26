import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";

const FilmsList = ({filmsData}) => {

  return filmsData.map((filmData) => (
    <FilmCard
      key={filmData.id}
      filmData={filmData}
    />
  ));
};

FilmsList.propTypes = {
  filmsData: PropTypes.arrayOf(PropTypes.shape({})),
};

export default FilmsList;

