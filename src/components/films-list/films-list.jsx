import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";
import {filterFilms} from "../util/util.js";
import {connect} from "react-redux";

const FilmsList = ({filmsData, onTitleClick, filteredGenre}) => {
  const filteredFilmsData = filterFilms(filmsData, filteredGenre);

  return filteredFilmsData.map((filmData) => (
    <FilmCard
      key={filmData.id}
      filmData={filmData}
      onTitleClick={onTitleClick}
    />
  ));
};

FilmsList.propTypes = {
  filmsData: PropTypes.arrayOf(PropTypes.shape({})),
  onTitleClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filteredGenre: state.genre,
});

export {FilmsList};
export default connect(mapStateToProps)(FilmsList);
