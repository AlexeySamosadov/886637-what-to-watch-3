import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const filmData = {
  name: `The Grand Budapest Hotel`,
  date: 2014,
  genre: `Drama`,
  src: `somePath`,
  id: `55`,
  srcPoster: `somePath`,
  ratingCount: 323,
  ratingLevel: `mustSee`,
  description: `dsfsdfdsfsfsdfsdfdsf`,
  actors: [`Toni Hawk`, `Arnold Vicci`, `Van gog`, `Charli Chaplin`, `German French`, `Italian English`],
  directors: `Alex Smitch`,
  srcVideo: `somePath`
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
      />, {
        createNodeMock: () => {
          return {};
        },
      });

  const card = smallMovieCard.find(`.small-movie-card`);
  card.simulate(`click`, mockEvent);

  expect(onTitleClick).toHaveBeenCalledWith(filmData.id);
});
