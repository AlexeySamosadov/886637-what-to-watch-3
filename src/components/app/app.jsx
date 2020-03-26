import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import PropTypes from 'prop-types';


class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showMoviePage: false,
      popupFilmData: this.props.filmsData[0],
    };
    this.onTitleClick = this.onTitleClick.bind(this);
  }

  onTitleClick(id) {
    const [currentFilm] = this.props.filmsData.filter((it)=>it.id === id);

    this.setState({
      showMoviePage: true,
      popupFilmData: currentFilm,
    });
  }

  renderApp() {
    const filmsData = this.props.filmsData;
    const {showMoviePage, popupFilmData} = this.state;
    if (!showMoviePage) {
      return (
        <Main
          filmsData={filmsData}
          onTitleClick={this.onTitleClick}
        />
      );
    } else if (showMoviePage) {
      return (
        <MoviePage
          filmData={popupFilmData}
        />
      );
    } else {
      return true;
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.renderApp()};
          </Route>
          <Route exact path="/moviePage">
            <MoviePage
              filmsData={this.props.filmsData}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

// const App = ({filmsData}) => {
//   return (
//     <Main
//       filmsData={filmsData}
//       testClick={titleHandler}
//     />
//   );
// };

App.propTypes = {
  movieInfo: PropTypes.shape({
  }),
  filmsData: PropTypes.arrayOf(PropTypes.shape({
  })),
};

export default App;
