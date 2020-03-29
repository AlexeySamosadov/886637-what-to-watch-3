import React from "react";
import renderer from "react-test-renderer";
import MoviePageDetails from "./movie-page-details.jsx";

const directors = `Alex Smitch`;
const actors = [`Toni Hawk`, `Arnold Vicci`, `Van gog`, `Charli Chaplin`, `German French`, `Italian English`];


it(`This is Unit Test for MoviePageDetails component`, ()=>{
  const tree = renderer
    .create(
        <MoviePageDetails
          directors={directors}
          actors={actors}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
