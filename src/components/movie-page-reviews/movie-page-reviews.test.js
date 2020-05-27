import React from "react";
import renderer from "react-test-renderer";
import MoviePageReviews from "./movie-page-reviews.jsx";

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
  srcVideo: `somePath`,
  comments: [{
    commentId: `id734832`,
    commentText: `Some text`,
    commentatorName: `Antoni Banderers`,
    commentRating: 7.9,
    commentTime: new Date(1466424490000),
  }]
};

it(`This is Unit Test for MoviePageDetails component`, ()=>{
  const tree = renderer
    .create(
        <MoviePageReviews
          filmData={filmData}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
