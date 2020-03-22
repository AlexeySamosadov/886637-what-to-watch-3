import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const MovieInfo = {
  name: `The Grand Budapest Hotel`,
  date: `2014`,
  genre: `Drama`,
};

it(`Render App`, () => {
  const tree = renderer.
  create(<App
    movieInfo = {MovieInfo}
  />).
  toJSON();

  expect(tree).toMatchSnapshot();
});
