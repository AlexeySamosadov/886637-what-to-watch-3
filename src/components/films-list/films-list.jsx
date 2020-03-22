import React, {PureComponent} from "react";
import {generateFilmCardsData} from "../mocks/films.js";
import FilmCard from "../film-card/film-card.jsx";


const filmsData = generateFilmCardsData(8);


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
    console.log(this.state);
  }

  getFilms() {
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


