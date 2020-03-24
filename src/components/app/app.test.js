import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const filmsData = [{
  name: `The Grand Budapest Hotel`,
  date: 2014,
  genre: `Drama`,
  src: `www.rr.i/fsfsdf`,
  id: `55`,
  srcPoster: `www.rr.i/fsfsdf`,
}];


it(`Render App`, () => {
  const tree = renderer.
  create(<App
    filmsData = {filmsData}
  />).
  toJSON();

  expect(tree).toMatchSnapshot();
});
