import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
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

it(`This is main test`, () => {
  const tree = renderer.
    create(
        <Main
          filmsData={filmsData}
          onTitleClick={() => {}}
        />
    ).
    toJSON();

  expect(tree).toMatchSnapshot();
});
