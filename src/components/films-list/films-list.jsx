import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";


export default class FilmsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilm: null,
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver(name) {
    this.setState({
      activeFilm: name,
    });
  }

  getFilms() {
    const {filmsData, onTitleClick} = this.props;
    return filmsData.map((filmData) => {
      return (
        <FilmCard
          key={filmData.id}
          filmData={filmData}
          onTitleClick={onTitleClick}
          handleMouseOver={this.handleMouseOver}/>
      );
    });
  }

  render() {
    return this.getFilms();
  }
}

FilmsList.propTypes = {
  filmsData: PropTypes.arrayOf(PropTypes.shape({})),
  onTitleClick: PropTypes.func.isRequired,
};


