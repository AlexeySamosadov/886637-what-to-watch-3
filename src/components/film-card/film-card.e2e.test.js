import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FilmCard} from "./film-card.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

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

const mockEvent = {
  preventDefault() {}
};

it(`Should data get pass when mouse over card`, ()=>{
  const handleMouseOver = jest.fn();
  const showPopup = jest.fn();
  const smallMovieCard = mount(
      <Provider store={store}>
        <FilmCard
          filmData={filmsData[0]}
          handleMouseOver={handleMouseOver}
          showPopup={showPopup}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        },
      });

  const card = smallMovieCard.find(`.test`);
  card.simulate(`click`, mockEvent);

  expect(showPopup).toHaveBeenCalledTimes(1);
});
