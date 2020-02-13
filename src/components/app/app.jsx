import React from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';

const App = ({movieInfo}) => {
  return (
    <Main
      movieInfo={movieInfo}
    />
  );
};

App.propTypes = {
  movieInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }),
};

export default App;
