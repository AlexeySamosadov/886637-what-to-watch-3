import React from "react";
import MoviePageOverview from "../movie-page-overview/movie-page-overview.jsx";
import MoviePageDetails from "../movie-page-details/movie-page-details.jsx";
import MoviePageReviews from "../movie-page-reviews/movie-page-reviews.jsx";
import {connect} from "react-redux";
import {getActiveTab, getChosenFilmData} from "../../reducer/app-status/selectors.js";
import {ACTIVE_TABS} from "../const/const.js";


const renderPageDetails = (filmData, activeTap) => {
  switch (activeTap) {
    case ACTIVE_TABS.DETAILS:
      return <MoviePageDetails filmData={filmData}/>;
    case ACTIVE_TABS.REVIEWS:
      return <MoviePageReviews filmData={filmData}/>;
    default:
      return <MoviePageOverview filmData={filmData}/>;
  }
};

export const MoviePageDescription = ({filmData, activeTab}) => renderPageDetails(filmData, activeTab);


const mapStateToProps = (state) => ({
  filmData: getChosenFilmData(state),
  activeTab: getActiveTab(state),
});
export default connect(mapStateToProps)(MoviePageDescription);
