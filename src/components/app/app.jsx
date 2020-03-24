import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import PropTypes from 'prop-types';


class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      state: 1
    };
    this._handleMainTitleClick = this._handleMainTitleClick.bind(this);
  }

  _handleMainTitleClick() {
    this.setState({
      state: 2,
    });
  }

  renderApp() {
    const filmsData = this.props.filmsData;
    const {state} = this.state;
    if (state === 1) {
      return (
        <Main
          filmsData={filmsData}
          onTitleClick={this._handleMainTitleClick}
        />
      );
    } else if (state === 2) {
      return (
        <MoviePage
          filmsData={filmsData}
        />
      );
    } else {
      return true;
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.renderApp()};
          </Route>
          <Route exact path="/moviePage">
            <MoviePage
              filmsData={this.props.filmsData}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

// const App = ({filmsData}) => {
//   return (
//     <Main
//       filmsData={filmsData}
//       onTitleClick={titleHandler}
//     />
//   );
// };

App.propTypes = {
  movieInfo: PropTypes.shape({
  }),
  filmsData: PropTypes.arrayOf(PropTypes.shape({
  })),
};

export default App;
