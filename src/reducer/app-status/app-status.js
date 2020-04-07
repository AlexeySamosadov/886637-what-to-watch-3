import {extend} from "../../components/util/util.js";

const initialState = {
  genre: `All genres`,
  showingFilmsNumber: 8,
  isRenderButton: true,
  chosenFilmData: null,
  popupFilmData: null,
  filmToWatch: null,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE: `SHOW_MORE`,
  SHOW_POPUP: `SHOW_POPUP`,
  SET_FILM_TO_WATCH: `SET_FILM_TO_WATCH`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  showMore: () => ({
    type: ActionType.SHOW_MORE,
    payload: 8,
  }),

  showPopup: (filmData) =>({
    type: ActionType.SHOW_POPUP,
    payload: filmData,
  }),
  setFilmToWatch: (film) => ({
    type: ActionType.SET_FILM_TO_WATCH,
    payload: film
  }),
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:

      return extend(state, {
        genre: action.payload,
      });

    case ActionType.SHOW_MORE:
      return extend(state, {
        showingFilmsNumber: state.showingFilmsNumber + action.payload,
      });

    case ActionType.SHOW_POPUP:
      return extend(state, {
        chosenFilmData: action.payload,
      });
    case ActionType.SET_FILM_TO_WATCH:
      return extend(state, {
        filmToWatch: action.payload
      });
  }
  return state;
};
