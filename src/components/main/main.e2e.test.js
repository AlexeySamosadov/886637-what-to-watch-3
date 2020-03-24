import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

const filmsData = [{
  name: `The Grand Budapest Hotel`,
  date: 2014,
  genre: `Drama`,
  src: `www.rr.i/fsfsdf`,
  id: `55`,
  srcPoster: `www.rr.i/fsfsdf`,
}];

it(`Should be title be clicked`, ()=>{
  const onTitleClick = jest.fn();

  const main = shallow(
      <Main
        filmsData={filmsData}
        onTitleClick={onTitleClick}
      />
  );

  const title = main.find(`h2.movie-card__title`);

  title.props().onClick();

  expect(onTitleClick.mock.calls.length).toBe(1);
});
