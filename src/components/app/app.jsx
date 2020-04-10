import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import PropTypes from 'prop-types';
import withMoviePage from "../../hocs/with-movie-page/with-movie-page.js";
import {getChosenFilmData, getFilmToWatch} from "../../reducer/app-status/selectors.js";
import withVideo from "../../hocs/with-video/with-video.js";
import MovieVideoPlayer from "../movie-video-player/movie-video-player.jsx";
import {playerType, playerClass} from "../const/const.js";

const VideoPlayer = withVideo(MovieVideoPlayer);


const MoviePageWrapper = withMoviePage(MoviePage);


class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  renderApp() {
    const {chosenFilmData, filmToWatch} = this.props;
    if (filmToWatch) {
      return (
        <VideoPlayer
          type={playerType.MOVIE}
          className={playerClass.PLAYER_VIDEO}
          srcVideo={filmToWatch.srcVideo}
          srcPoster={filmToWatch.srcPreview}
          isMuted
        />
      );
    }
    if (chosenFilmData) {
      return (<MoviePageWrapper/>);
    }
    return (<Main/>);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.renderApp()};
          </Route>
          <Route exact path="/moviePage">
            <MoviePage/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  movieInfo: PropTypes.shape({}),
  chosenFilmData: PropTypes.object,
  filmToWatch: PropTypes.object,
};

const mapStateToProps = (state) => ({
  chosenFilmData: getChosenFilmData(state),
  filmToWatch: getFilmToWatch(state),
});

export {App};
export default connect(mapStateToProps)(App);
