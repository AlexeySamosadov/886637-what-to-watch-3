import NameSpace from "../../components/name-space.js";

export const getFilmsData = (state) => {
  return state[NameSpace.DATA].filmsData;
};
