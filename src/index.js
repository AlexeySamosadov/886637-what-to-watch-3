import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {generateFilmCardsData} from "./mocks/films.js";


const filmsData = generateFilmCardsData(8);

ReactDOM.render(
    <App
      filmsData={filmsData}
    />,
    document.querySelector(`#root`)
);
