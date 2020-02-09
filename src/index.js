import React from "react";
import ReactDOM from "react-dom";

const MovieInfo = {
  name: `The Grand Budapest Hotel`,
  date: 2014,
  genre: `Drama`,
};

import App from "./components/app/app.jsx";
ReactDOM.render(
    <App
      movieInfo={MovieInfo}
    />,
    document.querySelector(`.app`)
);
