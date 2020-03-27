import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";
import {RATING_DESCRIPTION} from "../../mocks/films";

const filmData = {
  name: `The Grand Budapest Hotel`,
  date: 2014,
  genre: `Drama`,
  src: `www.rr.i/fsfsdf`,
  id: `55`,
  srcPoster: `www.rr.i/fsfsdf`,
  ratingCount: 323,
  ratingLevel: RATING_DESCRIPTION.mustSee,
  description: `dsfsdfdsfsfsdfsdfdsf`,
  actors: [`Toni Hawk`, `Arnold Vicci`, `Van gog`, `Charli Chaplin`, `German French`, `Italian English`],
  directors: `Alex Smitch`,
};

const handleMouseOver = () => {};
const onTitleClick = () => {};

it(`This is FilmCard Unit test`, ()=> {
  const tree = renderer.
  create(
      <FilmCard
        filmData={filmData}
        handleMouseOver={handleMouseOver}
        onTitleClick={onTitleClick}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
