import React from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';

const titleHandler = () => {
  return `Привет`;
};

const App = ({movieInfo}) => {
  return (
    <Main
      movieInfo={movieInfo}
      onTitleClick={titleHandler}
    />
  );
};

App.propTypes = {
  movieInfo: PropTypes.shape({
  }),
};

export default App;
