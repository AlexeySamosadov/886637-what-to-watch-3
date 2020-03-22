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

  handleMouseOver(evt, name) {
    this.setState({
      activeFilm: name,
    });
  }

  getFilms() {
    const {filmsData} = this.props;
    return filmsData.map(({name, src, id}) => {
      return (
        <FilmCard
          key={id}
          name={name}
          src={src}
          handleMouseOver={this.handleMouseOver}/>
      );
    });
  }

  render() {
    return this.getFilms();
  }
}

FilmsList.propTypes = {
  filmsData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }))
};


