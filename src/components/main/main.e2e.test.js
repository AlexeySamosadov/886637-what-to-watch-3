import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";
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
}, {
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
    popupFilmData: null,
  },
  DATA: {
    filmsData,
  }
});

Enzyme.configure({
  adapter: new Adapter(),
});


it(`Should be title be clicked`, ()=>{
  const onTitleClick = jest.fn();

  const main = mount(
      <Provider store={store}>
        <Main
          filmsData={filmsData}
          onTitleClick={onTitleClick}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        },
      }
  );

  const title = main.find(`h2.movie-card__title`);
  const poster = main.find(`.movie-card__poster`);

  title.simulate(`click`);
  poster.simulate(`click`);

  expect(onTitleClick.mock.calls.length).toBe(2);
});
