import React from "react";
import renderer from "react-test-renderer";
import MoviePageDetails from "./movie-page-details.jsx";

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
  srcVideo: `somePath`,
  duration: 155,
};


it(`This is Unit Test for MoviePageDetails component`, ()=>{
  const tree = renderer
    .create(
        <MoviePageDetails
          filmData={filmData}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
