import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);
      this._timer = null;
      this.videoRef = createRef();
      this.state = {
        isPlaying: this.props.isPlaying,
        isFullScreen: false,
        progressInPercent: 0,
        progressInSeconds: 0,
      };

      this._handlerPlayButtonClick = this._handlerPlayButtonClick.bind(this);
      this._handlerFullScreenButtonClick = this._handlerFullScreenButtonClick.bind(this);
      this._handlerMouseEnter = this._handlerMouseEnter.bind(this);
      this._handlerMouseLeave = this._handlerMouseLeave.bind(this);
      this._handlerMouseClick = this._handlerMouseClick.bind(this);
    }

    _handlerPlayButtonClick() {
      this.setState((prevState) => ({
        isPlaying: !prevState.isPlaying,
      }));
    }

    _handlerFullScreenButtonClick() {
      this.setState((prevState) => ({
        isFullScreen: !prevState.isFullScreen,
      }));
    }

    _handlerMouseEnter() {
      this._timer = setTimeout(()=>{
        this.setState({
          isPlaying: true,
        });
      }, 1000);
    }


    _handlerMouseLeave() {
      clearTimeout(this._timer);
      this.setState({
        isPlaying: false,
      });
    }

    _handlerMouseClick() {
      clearTimeout(this._timer);
    }

    componentDidMount() {
      const {srcVideo, isMuted = false, type} = this.props;
      const video = this.videoRef.current;
      video.src = srcVideo;
      video.muted = isMuted;

      video.onplay = () => {
        this.setState({
          isPlaying: true,
        });
      };

      if (type === `movie`) {
        video.onpause = () => {
          this.setState({
            isPlaying: false
          });
        };
      }
      video.ontimeupdate = () => this.setState({
        progressInSeconds: Math.floor(video.currentTime),
        progressInPercent: video.duration ? Math.round(video.currentTime / video.duration * 100) : 0
      });

      if (this.state.isPlaying) {
        video.play();
      }
    }

    componentDidUpdate() {
      const video = this.videoRef.current;

      const {type} = this.props;

      if (type === `movie`) {
        if (this.state.isPlaying) {
          video.play();
        } else {
          video.pause();
        }
      }

      if (type === `trailer` && this.state.isPlaying) {
        video.play();
      } else {
        video.load();
      }
    }

    componentWillUnmount() {
      const video = this.videoRef.current;

      video.onplay = null;
      video.src = ``;
      video.muted = false;
      video.onpause = null;
      video.ontimeupdate = null;
    }

    render() {
      const {srcPoster, srcVideo, widthAtr = null, heightAtr = null, className = ``} = this.props;
      const {isPlaying, isFullScreen, progressInSeconds, progressInPercent} = this.state;
      return <Component
        {...this.props}
        onFullScreenButtonClick={this._handlerFullScreenButtonClick}
        onPlayButtonClick={this._handlerPlayButtonClick}
        onMouseEnter={this._handlerMouseEnter}
        onMouseLeave={this._handlerMouseLeave}
        onClick={this._handlerMouseClick}
        isPlaying={isPlaying}
        isFullScreen={isFullScreen}
        progressInSeconds={progressInSeconds}
        progressInPercent={progressInPercent}
      >
        <video src={srcVideo} className={className} ref={this.videoRef} poster={`img/${srcPoster}`} alt="" width={widthAtr} height={heightAtr}/>
      </Component>;
    }
  }

  WithVideo.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    srcVideo: PropTypes.string.isRequired,
    srcPoster: PropTypes.string.isRequired,
    isMuted: PropTypes.bool,
    heightAtr: PropTypes.number,
    widthAtr: PropTypes.number,
    className: PropTypes.string,
    type: PropTypes.string.isRequired,
  };
  return WithVideo;
};

export default withVideo;
