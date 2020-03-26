import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import PropTypes from 'prop-types';


class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showMoviePage: false,
    };
    // this._handleMainTitleClick = this._handleMainTitleClick.bind(this);
    this.onTitleClick = this.onTitleClick.bind(this);
  }

  // _handleMainTitleClick() {
  //   this.setState({
  //     state: 2,
  //   });
  // }

  onTitleClick(t) {
    this.setState({
      showMoviePage: true,
    });
    console.log(`Отработал TitleClick`, t);
  }

  renderApp() {
    const filmsData = this.props.filmsData;
    const {showMoviePage} = this.state;
    if (!showMoviePage) {
      return (
        <Main
          filmsData={filmsData}
          onTitleClick={this.onTitleClick}
        />
      );
    } else if (showMoviePage) {
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
//       testClick={titleHandler}
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
