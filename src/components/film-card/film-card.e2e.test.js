import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card.jsx";
import {RATING_DESCRIPTION} from "../../mocks/films";

Enzyme.configure({
  adapter: new Adapter(),
});

const filmData = {
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
};

const mockEvent = {
  preventDefault() {}
};

it(`Should data get pass when mouse over card`, ()=>{
  const handleMouseOver = jest.fn();
  const onTitleClick = jest.fn();
  const smallMovieCard = shallow(
      <FilmCard
        filmData={filmData}
        handleMouseOver={handleMouseOver}
        onTitleClick={onTitleClick}
      />
  );

  const card = smallMovieCard.find(`.small-movie-card`);
  card.simulate(`mouseover`, mockEvent);
  card.simulate(`click`, mockEvent);

  expect(handleMouseOver).toHaveBeenCalledWith(filmData.name);
  expect(onTitleClick).toHaveBeenCalledWith(filmData.id);
});
