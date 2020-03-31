import React from "react";
import PropTypes from "prop-types";
import Tabs from "../tabs/tabs.jsx";
import MoviePageOverview from "../movie-page-overview/movie-page-overview.jsx";
import MoviePageDetails from "../movie-page-details/movie-page-details.jsx";
import MoviePageReviews from "../movie-page-reviews/movie-page-reviews.jsx";
import FilmsList from "../films-list/films-list.jsx";

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

const MoviePage = ({filmData, filmsData, activeTap, onTabClick, onTitleClick}) => {
  const {name, genre, date, srcPoster} = filmData;
  const filmsDataCutted = filmsData.slice(0, 4);


  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
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
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
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
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={`img/${srcPoster}`} alt="The Grand Budapest Hotel poster" width="218"
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

export default MoviePage;

MoviePage.propTypes = {
  filmData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    srcPoster: PropTypes.string.isRequired,
    ratingCount: PropTypes.number.isRequired,
    ratingLevel: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    actors: PropTypes.array.isRequired,
    directors: PropTypes.string.isRequired,
  }),
  filmsData: PropTypes.array.isRequired,
  onTitleClick: PropTypes.func,
  onTabClick: PropTypes.func,
  activeTap: PropTypes.string,
};
