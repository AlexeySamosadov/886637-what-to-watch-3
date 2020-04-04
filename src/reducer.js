import {extend} from "./components/util/util.js";

const initialState = {
  genre: `All genres`,
};

const ActionType = {
  CHANGE_GENRE: `Change genre`,
  RESET: `Reset`,
};
export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:

      return extend(state, {
        genre: action.payload,
      });

    case ActionType.RESET:
      return state;
  }
  return state;
};

// reducer(initialState, ActionCreator.changeGenre);
// dispatch(action) {
//   return state = reducer(initialState, ActionCreator.changeGenre);
// }

// if (action.payload === genreType.ALL) {
//   return extend({}, initialState);
// }
