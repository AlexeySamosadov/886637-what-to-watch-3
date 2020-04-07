import React, {PureComponent} from "react";

const withMoviePage = (Component) => {
  class WithMoviePAge extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeTap: `OVERVIEW`
      };
      this.onTabClick = this.onTabClick.bind(this);
    }

    onTabClick(evt, callBack) {
      evt.preventDefault();
      this.setState({
        activeTap: callBack
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          activeTap={this.state.activeTap}
          onTabClick={this.onTabClick}
        />
      );
    }
  }

  WithMoviePAge.propTypes = {};

  return WithMoviePAge;
};

export default withMoviePage;
