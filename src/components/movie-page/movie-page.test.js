import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";
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

it(`This is Unit Test for MoviePage component`, ()=>{
  const tree = renderer
    .create(<Provider store={store}>
      <MoviePage
        filmData={filmData}
        filmsData={filmsData}
        activeTap={`Overview`}
        onTabClick={()=>{}}
        onTitleClick={()=>{}}
      />
    </Provider>, {
      createNodeMock: () => {
        return {};
      },
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
