import React from "react";
import PropTypes from "prop-types";
import FilmsList from "../films-list/films-list.jsx";
import GenreList from "../genre-list/genre-list.jsx";
import ShowMore from "../show-more/show-more.jsx";
import {filterFilms} from "../util/util.js";
import {ActionCreator} from "../../reducer/app-status/app-status.js";
import {connect} from "react-redux";
import {getPromoFilm} from "../../reducer/data/selectors";
import {getFilmsToRender, getShowingFilmsNumber} from "../../reducer/app-status/selectors.js";
import {getGenre} from "../../reducer/app-status/selectors";
import Footer from "../footer/footer.jsx";
import {Header} from "../header/header.jsx";


const Main = ({filmsData, promoFilm, showPopup, filteredGenre, showingFilmsNumber, playFilm}) => {
  const {name, genre, date, srcPoster, backgroundImage} = promoFilm;
  const filteredFilmsData = filterFilms(filmsData, filteredGenre);
  const cuttedFilmsData = filteredFilmsData.slice(0, showingFilmsNumber);
  const onClick = (e) => {
    e.preventDefault();
    playFilm(promoFilm);
  };

  let isRenderButton = true;
  if (filteredFilmsData.length < showingFilmsNumber) {
    isRenderButton = false;
  }

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={backgroundImage}
            alt={`${backgroundImage} poster`}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>
        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div onClick={()=>showPopup(promoFilm)} className="movie-card__poster">
              <img src={srcPoster} alt={`${name} poster`} width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <h2 onClick={()=>showPopup(promoFilm)} className="movie-card__title test">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{date}</span>
              </p>

              <div className="movie-card__buttons">
                <button onClick={onClick} className="btn btn--play movie-card__button" type="button">
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
              showingFilmsNumber={showingFilmsNumber}
            />
          </div>

          {isRenderButton && <ShowMore/>}
        </section>
        <Footer/>
      </div>
    </React.Fragment>
  );
};


Main.propTypes = {
  filmsData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    srcPoster: PropTypes.string.isRequired,
    srcPreview: PropTypes.string.isRequired,
  })),
  filteredGenre: PropTypes.string,
  showingFilmsNumber: PropTypes.number,
  playFilm: PropTypes.func,
  showPopup: PropTypes.func.isRequired,
  promoFilm: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  promoFilm: getPromoFilm(state),
  filmsData: getFilmsToRender(state),
  showingFilmsNumber: getShowingFilmsNumber(state),
  filteredGenre: getGenre(state),
});

const mapStateToDispatch = (dispatch) => ({
  playFilm(filmData) {
    dispatch(ActionCreator.setFilmToWatch(filmData));
  },
  showPopup(filmData) {
    dispatch(ActionCreator.showPopup(filmData));
  }
});

export {Main};

export default connect(mapStateToProps, mapStateToDispatch)(Main);
