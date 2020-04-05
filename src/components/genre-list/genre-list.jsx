import React from "react";
import PropTypes from "prop-types";
import {genreType} from "../const/const.js";
import {ActionCreator} from "../../reducer/app-status/app-status.js";
import {connect} from "react-redux";
import {changeFirstLetterUppercase} from "../util/util.js";
import {getFilmsData} from "../../reducer/data/selectors.js";
import {getGenre} from "../../reducer/app-status/selectors";

const GenreList = ({fullFilmList, filteredGenre, onGenreClick}) => {
  const genresSet = new Set();
  genresSet.add(genreType.ALL);
  fullFilmList.forEach((it)=> genresSet.add(it.genre));
  const genreList = Array.from(genresSet).slice(0, 8);

  return (
    <ul className="catalog__genres-list">
      {genreList.map((it, i) => (
        <li key={i} onClick={(evt)=>{
          evt.preventDefault();
          onGenreClick(it);
        }} className={`catalog__genres-item ${filteredGenre === it && `catalog__genres-item--active`}`}>
          <a href="#" className="catalog__genres-link">{changeFirstLetterUppercase(it)}</a>
        </li>
      ))}
    </ul>
  );
};


GenreList.propTypes = {
  // filmsData: PropTypes.arrayOf(PropTypes.shape({})),
  filteredGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  fullFilmList: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  filteredGenre: getGenre(state),
  fullFilmList: getFilmsData(state),
});

const mapStateToDispatch = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  }
});

export {GenreList};
export default connect(mapStateToProps, mapStateToDispatch)(GenreList);
