import NameSpace from "../../components/name-space.js";

export const getFilmsData = (state) => {
  return state[NameSpace.DATA].filmsData;
};

export const getFilmsNew = (state) => {
  return state[NameSpace.DATA].films;
};

export const getPromoFilm = (state) => {
  return state[NameSpace.DATA].promoFilm;
};
