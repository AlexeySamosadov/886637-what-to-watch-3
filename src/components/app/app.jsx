import React from "react";
import Main from "../main/main.jsx";


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const movieInfo = props.movieInfo;
  return (
    <Main
      movieInfo={movieInfo}
    />
  );
};

export default App;
