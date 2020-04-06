// import React, {PureComponent, createRef} from "react";
// import PropTypes from "prop-types";
//
//
// export const withVideo = (component) => {
//   class WithVideo extends PureComponent {
//     constructor(props) {
//       super(props);
//
//       this.videoRef = createRef();
//       this.state = {
//         isPlaying: this.props.isPlaying,
//         isFullScreen: false,
//         progressInPercent: 0,
//         progressInSeconds: 0,
//       };
//
//       this._handlerPlayButtonClick = this._handlerPlayButtonClick.bind(this);
//       this._handlerFullScreenButtonClick = this._handlerFullScreenButtonClick.bind(this);
//     }
//
//     _handlerPlayButtonClick() {
//       this.setState((prevState) => ({
//         isPlaying: !prevState.isPlaying,
//       }));
//     }
//
//     _handlerFullScreenButtonClick() {
//       this.setState((prevState) => ({
//         isFullScreen: !prevState.isFullScreen,
//       }));
//     }
//
//     componentDidMount() {
//       const {srcVideo, isMuted = false, type} = this.props;
//       const video = this.videoRef.current;
//       video.src = srcVideo;
//       video.muted = isMuted;
//
//       video.onplay = () => {
//         this.setState({
//           isPlaying: true,
//         });
//       };
//
//       if (type === `movie`) {
//         video.onpause = () => {
//           this.setState({
//             isPlaying: false
//           });
//         };
//       }
//       video.ontimeupdate = () => this.setState({
//         progressInSeconds: Math.floor(video.currentTime),
//         progressInPercent: video.duration ? Math.round(video.currentTime / video.duration * 100) : 0
//       });
//
//       if (this.state.isPlaying) {
//         video.play();
//       }
//     }
//
//     componentDidUpdate() {
//       const video = this.videoRef.current;
//
//       const {isPlaying, type} = this.props;
//
//       if (type === `movie`) {
//         if (this.state.isPlaying) {
//           video.play();
//         } else {
//           video.pause();
//         }
//       }
//
//       if (type === `trailer` && isPlaying !== this.state.isPlaying) {
//         this.setState({isPlaying}, ()=> {
//           if (isPlaying) {
//             video.play();
//           } else {
//             video.load();
//           }
//         });
//       }
//     }
//   }
//
//   WithVideo.propTypes = {
//     isPlaying: PropTypes.bool.isRequired,
//     srcVideo: PropTypes.string.isRequired,
//     posterSrc: PropTypes.string.isRequired,
//     isMuted: PropTypes.bool,
//     heightAtr: PropTypes.number,
//     widthAtr: PropTypes.number,
//     className: PropTypes.string,
//     type: PropTypes.string.isRequired,
//   };
//   return WithVideo;
// };
