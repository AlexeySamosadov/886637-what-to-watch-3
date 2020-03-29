import React, {PureComponent} from "react";

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeFilm: false,
      };
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
    }

    handleMouseLeave() {
      this.setState(()=>({
        activeFilm: false,
      }));
      clearTimeout(this.timeOut);
    }

    handleMouseEnter() {
      clearTimeout(this.timeOut);
      this.timeOut = setTimeout(()=>{
        this.setState({
          activeFilm: true,
        });
      }, 1000);
    }

    render() {
      const {activeFilm} = this.state;
      return <Component
        {...this.props}
        handleMouseEnter={this.handleMouseEnter}
        isActive = {activeFilm}
        handleMouseLeave={this.handleMouseLeave}
      />;
    }

  }
  return WithVideoPlayer;
};

export default withVideoPlayer;
