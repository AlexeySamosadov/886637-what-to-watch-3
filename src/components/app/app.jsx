import React from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';

const titleHandler = () => {
  return `Привет`;
};

const App = ({filmsData}) => {
  return (
    <Main
      filmsData={filmsData}
      onTitleClick={titleHandler}
    />
  );
};

App.propTypes = {
  movieInfo: PropTypes.shape({
  }),
  filmsData: PropTypes.arrayOf(PropTypes.shape({
  })),
};

export default App;
