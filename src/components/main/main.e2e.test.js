import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

const MovieInfo = {
  name: `The Grand Budapest Hotel`,
  date: `2014`,
  genre: `Drama`,
  listFilm: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
};

it(`Should be title be clicked`, ()=>{
  const onTitleClick = jest.fn();

  const main = shallow(
      <Main
        movieInfo={MovieInfo}
        onTitleClick={onTitleClick}
      />
  );

  const title = main.find(`h2.movie-card__title`);

  title.props().onClick();

  expect(onTitleClick.mock.calls.length).toBe(1);
});
