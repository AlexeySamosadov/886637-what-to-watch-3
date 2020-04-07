import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import PropTypes from 'prop-types';
import withMoviePage from "../../hocs/with-movie-page/with-movie-page.js";
import {getChosenFilmData, getFilmsToRender, getGenre, getShowingFilmsNumber} from "../../reducer/app-status/selectors.js";
import {getFilmToWatch} from "../../reducer/app-status/selectors.js";
import withVideo from "../../hocs/with-video/with-video.js";
import MovieVideoPlayer from "../movie-video-player/movie-video-player.jsx";

const VideoPlayer = withVideo(MovieVideoPlayer);


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
    const {filmsData, filteredGenre, showingFilmsNumber, chosenFilmData, filmToWatch} = this.props;
    if (filmToWatch) {
      return (
        <VideoPlayer
          type={`movie`}
          className={`player__video`}
          isPlaying={true}
          srcVideo={filmToWatch.srcVideo}
          srcPoster={filmToWatch.srcPoster}
          // onExitFilmButtonClick={()=> console.log(`Отработал Ексит`)}
          isMuted
        />
      )
    }
    if (chosenFilmData) {
      return (
        <MoviePageWrapper
          filmData={chosenFilmData}
          filmsData={filmsData}
          onTitleClick={this.onTitleClick}
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
  filmToWatch: PropTypes.object,
};

const mapStateToProps = (state) => ({
  showingFilmsNumber: getShowingFilmsNumber(state),
  filteredGenre: getGenre(state),
  showMoviePage: state.showMoviePage,
  filmsData: getFilmsToRender(state),
  chosenFilmData: getChosenFilmData(state),
  filmToWatch: getFilmToWatch(state),
});

export {App};
export default connect(mapStateToProps)(App);
