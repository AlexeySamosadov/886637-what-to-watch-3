import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const filmsData = [{
  name: `The Grand Budapest Hotel`,
  date: 2014,
  genre: `Drama`,
  src: `www.rr.i/fsfsdf`,
  id: `55`,
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
