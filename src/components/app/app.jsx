import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import PropTypes from 'prop-types';
import withMoviePage from "../../hocs/with-movie-page.js";
import {getChosenFilmData, getFilmsToRender, getGenre, getShowingFilmsNumber} from "../../reducer/app-status/selectors.js";

const MoviePageWrapper = withMoviePage(MoviePage);


class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      popupFilmData: null,
    };
    this.onTitleClick = this.onTitleClick.bind(this);
  }

  onTitleClick(id, genre) {
    const [currentFilm] = this.props.filmsData.filter((it)=>it.id === id);
    this.setState({
      popupFilmData: currentFilm,
      popupGenre: genre,
    });
  }

  renderApp() {
    const {filmsData, filteredGenre, showingFilmsNumber, chosenFilmData} = this.props;
    const {popupGenre} = this.state;
    if (chosenFilmData) {
      return (
        <MoviePageWrapper
          filmData={chosenFilmData}
          filmsData={filmsData}
          onTitleClick={this.onTitleClick}
          popupGenre={popupGenre}
        />
      );
    }
    return (
      <Main
        filmsData={filmsData}
        onTitleClick={this.onTitleClick}
        filteredGenre={filteredGenre}
        showingFilmsNumber={showingFilmsNumber}
      />
    );
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

App.propTypes = {
  movieInfo: PropTypes.shape({
  }),
  filmsData: PropTypes.arrayOf(PropTypes.shape({
  })),
  filteredGenre: PropTypes.string,
  showingFilmsNumber: PropTypes.number,
  chosenFilmData: PropTypes.object,
};

const mapStateToProps = (state) => ({
  showingFilmsNumber: getShowingFilmsNumber(state),
  filteredGenre: getGenre(state),
  showMoviePage: state.showMoviePage,
  filmsData: getFilmsToRender(state),
  chosenFilmData: getChosenFilmData(state),
});

export {App};
export default connect(mapStateToProps)(App);
