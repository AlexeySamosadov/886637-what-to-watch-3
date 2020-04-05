import React from "react";
import PropTypes from "prop-types";
import FilmsList from "../films-list/films-list.jsx";
import GenreList from "../genre-list/genre-list.jsx";
import ShowMore from "../show-more/show-more.jsx";
import {filterFilms} from "../util/util.js";


const Main = ({filmsData, onTitleClick, filteredGenre, showingFilmsNumber}) => {
  const movieInfo = filmsData[0];
  const {name, genre, date, id} = movieInfo;
  const filteredFilmsData = filterFilms(filmsData, filteredGenre);
  const cuttedFilmsData = filteredFilmsData.slice(0, showingFilmsNumber);

  let isRenderButton = true;
  if (filteredFilmsData.length < showingFilmsNumber) {
    isRenderButton = false;
  }

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg"
            alt="{name} poster"
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div onClick={()=>onTitleClick(id)} className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="{name} poster" width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <h2 onClick={()=>onTitleClick(id, genre)} className="movie-card__title test">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{date}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList
            filmsData={filmsData}
          />
          <div className="catalog__movies-list">
            <FilmsList
              filmsData={cuttedFilmsData}
              onTitleClick={onTitleClick}
              showingFilmsNumber={showingFilmsNumber}
            />
          </div>

          {isRenderButton && <ShowMore/>}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};


Main.propTypes = {
  filmsData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  })),
  filteredGenre: PropTypes.string,
  onTitleClick: PropTypes.func.isRequired,
  showingFilmsNumber: PropTypes.number,
};

export default Main;
