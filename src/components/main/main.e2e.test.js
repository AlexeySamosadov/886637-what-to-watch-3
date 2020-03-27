import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";
import {RATING_DESCRIPTION} from "../../mocks/films";


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
  ratingCount: 323,
  ratingLevel: RATING_DESCRIPTION.mustSee,
  description: `dsfsdfdsfsfsdfsdfdsf`,
  actors: [`Toni Hawk`, `Arnold Vicci`, `Van gog`, `Charli Chaplin`, `German French`, `Italian English`],
  directors: `Alex Smitch`,
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
  const poster = main.find(`.movie-card__poster`);

  title.simulate(`click`);
  poster.simulate(`click`);

  expect(onTitleClick.mock.calls.length).toBe(2);
});
