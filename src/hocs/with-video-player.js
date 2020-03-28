import React, {PureComponent} from "react";

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeFilm: false,
      };
      this.handleMouse = this.handleMouse.bind(this);
    }

    handleMouse() {
      this.setState({
        activeFilm: !this.state.activeFilm
      });
    }

    render() {
      const {activeFilm} = this.state;
      return <Component
        {...this.props}
        isActive = {activeFilm}
        handleMouse={this.handleMouse}
      />;
    }

  }
  return WithVideoPlayer;
};

export default withVideoPlayer;
