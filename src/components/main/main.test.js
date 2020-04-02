import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {Provider} from "react-redux";

const filmsData = [{
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
}];

it(`This is main test`, () => {
  const tree = renderer.
    create(
        <Provider>
          <Main
            filmsData={filmsData}
            onTitleClick={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          },
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
