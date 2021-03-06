import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";


const mockStore = configureStore([]);

const store = mockStore({
  genre: `Drama`,
});

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

const filteredGenre = `Drama`;

const onTitleClick = ()=> {};

it(`This is FilmList Unit Test`, () => {
  const tree = renderer.
  create(<Provider store={store}>
    <FilmsList
      filmsData={filmsData}
      onTitleClick={onTitleClick}
      filteredGenre={filteredGenre}
    />
  </Provider>, {
    createNodeMock: () => {
      return {};
    },
  }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
