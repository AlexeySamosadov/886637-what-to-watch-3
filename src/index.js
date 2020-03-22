import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {generateFilmCardsData} from "./components/mocks/films.js";

const MovieInfo = {
  name: `The Grand Budapest Hotel`,
  date: `2014`,
  genre: `Drama`,
  listFilm: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
};


ReactDOM.render(
    <App
      movieInfo={MovieInfo}
    />,
    document.querySelector(`#root`)
);
