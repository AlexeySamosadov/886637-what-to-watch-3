import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card.jsx";

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


const {name, src} = filmsData[0];

const mockEvent = {
  preventDefault() {}
};

it(`Should data get pass when mouse over card`, ()=>{
  const handleMouseOver = jest.fn();
  const smallMovieCard = shallow(
      <FilmCard
        handleMouseOver={handleMouseOver}
        name={name}
        src={src}
      />
  );

  const card = smallMovieCard.find(`.small-movie-card`);
  card.simulate(`mouseover`, mockEvent);

  expect(handleMouseOver).toHaveBeenCalledWith(name);
});
