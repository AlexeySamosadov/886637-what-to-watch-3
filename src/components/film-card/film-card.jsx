import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app-status/app-status.js";
import withVideo from "../../hocs/with-video/with-video.js";
import MovieVideoPlayer from "../movie-video-player/movie-video-player.jsx";

const VideoPlae = withVideo(MovieVideoPlayer);

const FilmCard = ({filmData, showPopup})=> {
  const {src, name, srcVideo} = filmData;
  const onClick = () => {
    showPopup(filmData);
  };
  return (
    <article onClick={onClick}
      className="small-movie-card test catalog__movies-card">

      <VideoPlae
        isPlaying={false}
        srcPoster={src}
        srcVideo={srcVideo}
        widthAtr={280}
        heightAtr={175}
        type={`trailer`}
      />
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};


FilmCard.propTypes = {
  // onTitleClick: PropTypes.func.isRequired,
  showPopup: PropTypes.func.isRequired,
  filmData: PropTypes.shape({
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // id: PropTypes.string.isRequired,
    srcVideo: PropTypes.string.isRequired,
    // genre: PropTypes.string.isRequired,
  }),
};

export {FilmCard};

const mapStateToDispatch = (dispatch) => ({
  showPopup(filmData) {
    dispatch(ActionCreator.showPopup(filmData));
  }
});

export default connect(null, mapStateToDispatch)(FilmCard);
