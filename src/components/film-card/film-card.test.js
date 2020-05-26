import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const store = mockStore({
  genre: `Drama`,
});

const filmData = {
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
};

const handleMouseOver = () => {};
const onTitleClick = () => {};

it(`This is FilmCard Unit test`, ()=> {
  const tree = renderer.
  create(
      <Provider store={store}>
        <FilmCard
          filmData={filmData}
          handleMouseOver={handleMouseOver}
          onTitleClick={onTitleClick}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        },
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
