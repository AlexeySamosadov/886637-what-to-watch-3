import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";

const filmData = {
  name: `The Grand Budapest Hotel`,
  date: 2014,
  genre: `Drama`,
  src: `www.rr.i/fsfsdf`,
  id: `55`,
  srcPoster: `www.rr.i/fsfsdf`,
};

it(`This is Unit Test for MoviePage component`, ()=>{
  const tree = renderer
    .create(
        <MoviePage
          filmData={filmData}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
