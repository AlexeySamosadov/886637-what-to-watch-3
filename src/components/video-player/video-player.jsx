import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = createRef();
  }

  componentDidMount() {
    const {srcVideo} = this.props;
    const video = this._videoRef.current;
    video.src = srcVideo;
    video.muted = true;
    video.play();
  }
  render() {
    const {src} = this.props;
    return (
      <video className="player__video" ref={this._videoRef} poster={`img/${src}`}/>
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  srcVideo: PropTypes.string.isRequired,
};
