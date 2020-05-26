import React from "react";
import render from "react-test-renderer";
import GenreList from "./genre-list.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const filmsData = [{
  name: `The Grand Budapest Hotel`,
  date: 2014,
  genre: `Drama`,
  src: `somePath`,
  id: `55`,
  srcPoster: `somePath`,
  ratingCount: 323,
  ratingLevel: `mustSee`,
  description: `dsfsdfdsfsfsdfsdfdsf`,
  actors: [`Toni Hawk`, `Arnold Vicci`, `Van gog`, `Charli Chaplin`, `German French`, `Italian English`],
  directors: `Alex Smitch`,
  srcVideo: `somePath`
}];

const store = mockStore({
  APP_STATUS: {
    genre: `All genres`,
    showingFilmsNumber: 8,
    isRenderButton: true,
    chosenFilmData: null,
    popupFilmData: null},
  DATA: {
    filmsData,
  }
});


const filteredGenre = `Drama`;


it(`This is GenreList Unit Test`, ()=> {
  const tree = render.
  create(
      <Provider store={store}>
        <GenreList
          onGenreClick={()=>{}}
          filmsData={filmsData}
          filteredGenre={filteredGenre}>
        </GenreList>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
