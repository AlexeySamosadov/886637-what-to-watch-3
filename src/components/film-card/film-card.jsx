import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";
import withVideoPlayer from "../../hocs/with-video-player.js";

const VideoPlayerWrapper = withVideoPlayer(VideoPlayer);


const FilmCard = ({filmData, onTitleClick})=> {
  const {src, name, id, srcVideo} = filmData;
  return (
    <article onClick={
      ()=> onTitleClick(id)
    }
    className="small-movie-card catalog__movies-card"
    >
      <VideoPlayerWrapper src={src} srcVideo={srcVideo} width="280" height="175"/>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};


FilmCard.propTypes = {
  onTitleClick: PropTypes.func.isRequired,
  filmData: PropTypes.shape({
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    srcVideo: PropTypes.string.isRequired,
  }),
};

export default FilmCard;
