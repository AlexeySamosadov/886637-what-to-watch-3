import React from "react";
import renderer from "react-test-renderer";
import MoviePageOverview from "./movie-page-overview.jsx";

const ratingCount = 323;
const description = `Here Some Description`;
const directors = `Alex Smitch`;
const actors = [`Toni Hawk`, `Arnold Vicci`, `Van gog`, `Charli Chaplin`, `German French`, `Italian English`];
const ratingLevel = `mustSee`;


it(`This is Unit Test for MoviePageDetails component`, ()=>{
  const tree = renderer
    .create(
        <MoviePageOverview
          ratingLevel={ratingLevel}
          description={description}
          directors={directors}
          actors={actors}
          ratingCount={ratingCount}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
