import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = createRef();
  }


  componentDidMount() {
    const {srcVideo} = this.props;
    this._video = this._videoRef.current;
    this._video.src = srcVideo;
    this._video.muted = true;
  }

  componentDidUpdate() {
    const {isActive} = this.props;
    if (isActive) {
      this._video.play();
    } else {
      this._video.load();
    }
  }

  componentWillUnmount() {
    this._video.oncanplaythrough = null;
    this._video.onplay = null;
    this._video.onpause = null;
    this._video.ontimeupdate = null;
    this._video.src = ``;
    this._video = null;
  }

  render() {
    const {src, handleMouse} = this.props;
    let timeOut = () => {};
    return (
      <div className="small-movie-card__image"
        onMouseOver={()=>{
          timeOut = setTimeout(handleMouse, 1000);
        }}
        onMouseLeave={()=>{
          clearTimeout(timeOut);
          handleMouse();
        }}
      >
        <video className="player__video" ref={this._videoRef} poster={`img/${src}`}/>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  srcVideo: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleMouse: PropTypes.func.isRequired,
};
