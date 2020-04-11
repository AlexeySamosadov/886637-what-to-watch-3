import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {playerType} from "../../components/const/const.js";

const withVideoPlayer = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);
      this._timer = null;
      this.videoRef = createRef();
      this.state = {
        isPlaying: false,
        isFullScreen: false,
        progressInPercent: 0,
        progressInSeconds: 0,
        isSoundOff: false,
        value: 1,
      };

      this._handlerPlayButtonClick = this._handlerPlayButtonClick.bind(this);
      this._handlerFullScreenButtonClick = this._handlerFullScreenButtonClick.bind(this);
      this._handlerMouseEnter = this._handlerMouseEnter.bind(this);
      this._handlerMouseLeave = this._handlerMouseLeave.bind(this);
      this._handlerMouseClick = this._handlerMouseClick.bind(this);
      this._handlerOnOffSound = this._handlerOnOffSound.bind(this);
      this._setValue = this._setValue.bind(this);
      this._setPercentFilm = this._setPercentFilm.bind(this);
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

    _handlerOnOffSound() {
      this.setState((prevState) => ({
        isSoundOff: !prevState.isSoundOff,
      }));
    }

    _setValue(evt) {
      const value = evt.target.value / 100;
      this.setState(() => ({
        value,
      }));
    }

    _setPercentFilm(evt) {
      const value = evt.target.value;
      console.log(value);
      this.setState(() => ({
        progressInPercent: value,
      }));
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

      if (type === playerType.MOVIE) {
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

      video.muted = this.state.isSoundOff;
      video.volume = this.state.value;

      // console.log(`Время видео`, video.currentTime);
      // console.log(`Длина видео`, video.duration);

      // video.currentTime = video.duration / this.progressInPercent;

      const {type} = this.props;
      if (type === playerType.MOVIE) {
        if (this.state.isPlaying) {
          video.play();
        } else {
          video.pause();
        }
      }

      if (type === playerType.TRAILER) {
        if (this.state.isPlaying) {
          video.play();
        } else {
          video.load();
        }
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
      const {isPlaying, isFullScreen, progressInSeconds, progressInPercent, isSoundOff} = this.state;
      return <Component
        {...this.props}
        onFullScreenButtonClick={this._handlerFullScreenButtonClick}
        onPlayButtonClick={this._handlerPlayButtonClick}
        onMouseEnter={this._handlerMouseEnter}
        onMouseLeave={this._handlerMouseLeave}
        onClick={this._handlerMouseClick}
        onSoundClick={this._handlerOnOffSound}
        setValue={this._setValue}
        setPercentFilm={this._setPercentFilm}
        isSoundOff={isSoundOff}
        isPlaying={isPlaying}
        isFullScreen={isFullScreen}
        progressInSeconds={progressInSeconds}
        progressInPercent={progressInPercent}
      >
        <video src={srcVideo} className={className} ref={this.videoRef} poster={srcPoster} alt="" width={widthAtr} height={heightAtr}/>
      </Component>;
    }
  }

  WithVideo.propTypes = {
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

export default withVideoPlayer;
