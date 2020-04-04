import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import {generateFilmCardsData} from "./mocks/films.js";
import {reducer} from "./reducer.js";

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f)=>f);

const filmsData = generateFilmCardsData(8);

ReactDOM.render(
    <Provider store={store}>
      <App
        filmsData={filmsData}
      />
    </Provider>
    ,
    document.querySelector(`#root`)
);
