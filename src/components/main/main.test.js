import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const MovieInfo = {
  name: `The Grand Budapest Hotel`,
  date: `2014`,
  genre: `Drama`,
  listFilm: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
};

it(`This is main test`, () => {
  const tree = renderer.
    create(
        <Main
          movieInfo={MovieInfo}
          onTitleClick={() => {}}
        />
    ).
    toJSON();

  expect(tree).toMatchSnapshot();
});
