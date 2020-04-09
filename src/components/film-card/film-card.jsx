import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app-status/app-status.js";
import withVideo from "../../hocs/with-video/with-video.js";
import MovieVideoPlayer from "../movie-video-player/movie-video-player.jsx";
import {playerType} from "../const/const.js";

const VideoPlayer = withVideo(MovieVideoPlayer);

const FilmCard = ({filmData, showPopup})=> {
  const {srcPreview, name, srcPreviewVideo} = filmData;
  const onClick = () => {
    showPopup(filmData);
  };
  return (
    <article onClick={onClick}
      className="small-movie-card catalog__movies-card">
      <VideoPlayer
        srcPoster={srcPreview}
        srcVideo={srcPreviewVideo}
        widthAtr={280}
        heightAtr={175}
        type={playerType.TRAILER}
      />
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};


FilmCard.propTypes = {
  showPopup: PropTypes.func.isRequired,
  filmData: PropTypes.shape({
    srcPreview: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    srcPreviewVideo: PropTypes.string.isRequired,
  }),
};

export {FilmCard};

const mapStateToDispatch = (dispatch) => ({
  showPopup(filmData) {
    dispatch(ActionCreator.showPopup(filmData));
  }
});

export default connect(null, mapStateToDispatch)(FilmCard);
