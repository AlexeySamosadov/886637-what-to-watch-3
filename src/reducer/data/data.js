import {extend} from "../../components/util/util.js";
import {adaptFilmsData, adaptFilmData} from "./adapt-films-data.js";

const initialState = {
  filmsData: [],
  promoFilm: {}
};

const ActionTypes = {
  LOAD_FILMS: `LOAD_FILMS`,
  PROMO_FILM: `PROMO_FILM`
};

const ActionCreators = {
  loadFilms: (films) => ({
    type: ActionTypes.LOAD_FILMS,
    payload: films,
  }),
  promoFilm: (film) => ({
    type: ActionTypes.PROMO_FILM,
    payload: film,
  }),
};


export const Operation = {
  loadFilms: () =>(dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response)=>{
        dispatch(ActionCreators.loadFilms(adaptFilmsData(response.data)));
      });
  },
  promoFilm: () =>(dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response)=>{
        dispatch(ActionCreators.promoFilm(adaptFilmData(response.data)));
      });
  }
};


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_FILMS:
      return extend(state, {filmsData: action.payload});
    case ActionTypes.PROMO_FILM:
      return extend(state, {promoFilm: action.payload});
  }
  return state;
};
