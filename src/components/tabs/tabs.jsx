import React from "react";
import PropTypes from "prop-types";
import {ACTIVE_TABS} from "../movie-page/movie-page.jsx";

const Tabs = ({activeTap, onTabClick}) => {
  return (
    <ul className="movie-nav__list">
      <li onClick={(evt)=>onTabClick(evt, ACTIVE_TABS.OVERVIEW)} className={`movie-nav__item ${activeTap === ACTIVE_TABS.OVERVIEW && `movie-nav__item--active`}`}>
        <a href="#" className="movie-nav__link">Overview</a>
      </li>
      <li onClick={(evt)=>onTabClick(evt, ACTIVE_TABS.DETAILS)} className={`movie-nav__item ${activeTap === ACTIVE_TABS.DETAILS && `movie-nav__item--active`}`}>
        <a href="#" className="movie-nav__link">Details</a>
      </li>
      <li onClick={(evt)=>onTabClick(evt, ACTIVE_TABS.REVIEWS)} className={`movie-nav__item ${activeTap === ACTIVE_TABS.REVIEWS && `movie-nav__item--active`}`}>
        <a href="#" className="movie-nav__link">Reviews</a>
      </li>
    </ul>
  );
};

export default Tabs;

Tabs.propTypes = {
  onTabClick: PropTypes.func.isRequired,
  activeTap: PropTypes.string.isRequired,
};
