import React from "react";
import PropTypes from "prop-types";
import Tabs from "../tabs/tabs.jsx";
import MoviePageOverview from "../movie-page-overview/movie-page-overview.jsx";
import MoviePageDetails from "../movie-page-details/movie-page-details.jsx";
import MoviePageReviews from "../movie-page-reviews/movie-page-reviews.jsx";
import FilmsList from "../films-list/films-list.jsx";
import {filterFilms} from "../util/util.js";
import {ActionCreator} from "../../reducer/app-status/app-status.js";
import {connect} from "react-redux";
import {getChosenFilmData, getFilmsToRender} from "../../reducer/app-status/selectors";

export const ACTIVE_TABS = {
  OVERVIEW: `OVERVIEW`,
  DETAILS: `DETAILS`,
  REVIEWS: `REVIEWS`,
};

const renderPageDetails = (filmData, activeTap) => {
  switch (activeTap) {
    case ACTIVE_TABS.OVERVIEW:
      return <MoviePageOverview filmData={filmData}/>;
    case ACTIVE_TABS.DETAILS:
      return <MoviePageDetails filmData={filmData}/>;
    case ACTIVE_TABS.REVIEWS:
      return <MoviePageReviews filmData={filmData}/>;
  }
  return true;
};

export const MoviePage = ({filmData, filmsData, activeTap, onTabClick, onTitleClick, playFilm, closeMoviePage}) => {
  const {name, genre, date, srcPoster, backgroundImage, backgroundColor} = filmData;
  const filteredFilmsData = filterFilms(filmsData, filmData.genre);
  const exception = filteredFilmsData.filter((it)=>it.name !== filmData.name);
  const filmsDataCutted = exception.slice(0, 4);
  const onClick = (e) => {
    e.preventDefault();
    playFilm(filmData);
  };
  const closePopup = (e) => {
    e.preventDefault();
    closeMoviePage();
  };

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full" style={{backgroundColor: `${backgroundColor}`}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt="The Grand Budapest Hotel"/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="#" onClick={closePopup} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="https://htmlacademy-react-3.appspot.com/wtw/static/film/background/matrix.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{date}</span>
              </p>

              <div className="movie-card__buttons">
                <button onClick={onClick} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="#" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={srcPoster} alt={name} width="218"
                height="327"/>
            </div>
            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <Tabs
                  activeTap={activeTap}
                  onTabClick={onTabClick}
                />
              </nav>
              {renderPageDetails(filmData, activeTap)}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__movies-list">
            <FilmsList
              filmsData={filmsDataCutted}
              onTitleClick={onTitleClick}
            />
          </div>

        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
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

MoviePage.propTypes = {
  filmData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    srcPoster: PropTypes.string.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    actors: PropTypes.array.isRequired,
    directors: PropTypes.string.isRequired,
  }),
  filmsData: PropTypes.array.isRequired,
  onTitleClick: PropTypes.func,
  onTabClick: PropTypes.func,
  activeTap: PropTypes.string,
  playFilm: PropTypes.func,
  closeMoviePage: PropTypes.func,
};

const mapStateToProps = (state) => ({
  filmsData: getFilmsToRender(state),
  filmData: getChosenFilmData(state),
});

const mapStateToDispatch = (dispatch) => ({
  playFilm(filmData) {
    dispatch(ActionCreator.setFilmToWatch(filmData));
  },
  closeMoviePage() {
    dispatch(ActionCreator.showPopup());
  }
});

export default connect(mapStateToProps, mapStateToDispatch)(MoviePage);
