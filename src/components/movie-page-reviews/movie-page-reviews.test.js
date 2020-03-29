import React from "react";
import renderer from "react-test-renderer";
import MoviePageReviews from "./movie-page-reviews.jsx";


it(`This is Unit Test for MoviePageDetails component`, ()=>{
  const tree = renderer
    .create(
        <MoviePageReviews/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
