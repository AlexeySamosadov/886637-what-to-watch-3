import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class OldVideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isActive: this.props.isActive
    };
    this._videoRef = createRef();
  }


  componentDidMount() {
    const {srcVideo} = this.props;
    const video = this._videoRef.current;
    video.src = srcVideo;
    video.muted = true;
  }

  componentDidUpdate() {
    const {isActive} = this.props;
    const video = this._videoRef.current;
    if (isActive) {
      video.play();
    } else {
      video.load();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.muted = false;
    video.onplay = null;
    video.src = ``;
  }

  render() {
    const {src, handleMouseLeave, handleMouseEnter, handleClickClearTimeout} = this.props;
    return (
      <div className="small-movie-card__image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClickClearTimeout}
      >
        <video className="player__video" ref={this._videoRef} poster={`img/${src}`}/>
      </div>
    );
  }
}

OldVideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  srcVideo: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleClickClearTimeout: PropTypes.func.isRequired,
};
