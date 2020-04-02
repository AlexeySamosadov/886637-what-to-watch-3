import React from "react";
import PropTypes from "prop-types";
import {genreType} from "../const/const.js";
import {ActionCreator} from "../../reducer.js";
import {connect} from "react-redux";

const GenreList = ({filmsData, onGenreClick}) => {
  const genresSet = new Set();
  genresSet.add(genreType.ALL);
  filmsData.forEach((it)=> genresSet.add(it.genre));
  const genreList = Array.from(genresSet);


  return (
    <ul className="catalog__genres-list">
      {genreList.map((it, i) => (
        <li key={i} onClick={(evt)=>{
          evt.preventDefault();
          onGenreClick(it)}} className={`catalog__genres-item ${genreType.ALL === it && `catalog__genres-item--active`}`}>
          <a href="#" className="catalog__genres-link">{it}</a>
        </li>
      ))}
    </ul>
  );
};


GenreList.propTypes = {
  filmsData: PropTypes.arrayOf(PropTypes.shape({})),
  onGenreClick: PropTypes.func,
};

const mapStateToDispatch = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  }
});

export {GenreList};
export default connect(null, mapStateToDispatch)(GenreList);
