import React from "react";
import PropTypes from "prop-types";
import {genreType} from "../const/const.js";
import {ActionCreator} from "../../reducer.js";
import {connect} from "react-redux";
import {changeFirstLetterUppercase} from "../util/util.js";

const GenreList = ({filmsData, filteredGenre, onGenreClick}) => {
  const genresSet = new Set();
  genresSet.add(genreType.ALL);
  filmsData.forEach((it)=> genresSet.add(it.genre));
  const genreList = Array.from(genresSet);


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
  filmsData: PropTypes.arrayOf(PropTypes.shape({})),
  filteredGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  filteredGenre: state.genre,
});

const mapStateToDispatch = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  }
});

export {GenreList};
export default connect(mapStateToProps, mapStateToDispatch)(GenreList);
