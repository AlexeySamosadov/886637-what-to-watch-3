import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";
import {RATING_DESCRIPTION} from "../../mocks/films";

const filmsData = [{
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
}];

const onTitleClick = ()=> {};

it(`This is FilmList Unit Test`, ()=> {
  const tree = renderer.
  create(
      <FilmsList
        filmsData={filmsData}
        onTitleClick={onTitleClick}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
