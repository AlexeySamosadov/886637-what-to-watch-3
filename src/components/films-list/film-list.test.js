import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";

const filmsData = [{
  name: `The Grand Budapest Hotel`,
  date: 2014,
  genre: `Drama`,
  src: `www.rr.i/fsfsdf`,
  id: `55`,
  srcPoster: `www.rr.i/fsfsdf`,
}];

it(`This is FilmList Unit Test`, ()=> {
  const tree = renderer.
  create(
      <FilmsList
        filmsData={filmsData}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
