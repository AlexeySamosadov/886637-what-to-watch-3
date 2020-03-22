import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

const filmsData = [{
  name: `The Grand Budapest Hotel`,
  date: 2014,
  genre: `Drama`,
  src: `www.rr.i/fsfsdf`,
  id: `55`,
}];

const {name, src} = filmsData[0];
const handleMouseOver = () => {};

it(`This is FilmCard Unit test`, ()=> {
  const tree = renderer.
  create(
      <FilmCard
        src={src}
        handleMouseOver={handleMouseOver}
        name={name}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
