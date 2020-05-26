import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import thunk from "redux-thunk";
import reducer from "./reducer.js";
import {createAPI} from "./api/api.js";
import {composeWithDevTools} from 'redux-devtools-extension';
import {Operation as DataOperation} from "./reducer/data/data.js";


const api = createAPI(()=>{});

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);


store.dispatch(DataOperation.loadFilms());
store.dispatch(DataOperation.promoFilm());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
    ,
    document.querySelector(`#root`)
);
