import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";


export default class FilmsList extends PureComponent {
  constructor(props) {
    super(props);
  }

  getFilms() {
    const {filmsData, onTitleClick} = this.props;
    return filmsData.map((filmData) => {
      return (
        <FilmCard
          key={filmData.id}
          filmData={filmData}
          onTitleClick={onTitleClick}
        />
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


