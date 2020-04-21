import {createSelector} from "reselect";
import {getFilmsData} from "../data/selectors.js";
import {genreType} from "../../components/const/const.js";
import NameSpace from "../../components/name-space.js";

export const getGenre = (state) => {
  return state[NameSpace.APP_STATUS].genre;
};

export const getShowingFilmsNumber = (state) => {
  return state[NameSpace.APP_STATUS].showingFilmsNumber;
};

export const getChosenFilmData = (state) => {
  return state[NameSpace.APP_STATUS].chosenFilmData;
};


const combiner = (films, genre, number)=> {
  if (genre === genreType.ALL) {
    return films.slice(0, number);
  }
  const filteredFilms = films.filter((it) => it.genre === genre);
  return filteredFilms.slice(0, number);
};

export const getFilmToWatch = (state) => {
  return state[NameSpace.APP_STATUS].filmToWatch;
};
export const getActiveTab = (state) => {
  return state[NameSpace.APP_STATUS].activeTab;
};


export const getFilmsToRender = createSelector(getFilmsData, getGenre, getShowingFilmsNumber, combiner);
