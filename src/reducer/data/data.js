import {generateFilmCardsData} from "../../mocks/films.js";

const initialState = {
  filmsData: generateFilmCardsData(17),
};

export const reducer = (state = initialState) => {
  return state;
};
