import React from "react";
import PropTypes from "prop-types";

const Tabs = ({onTabClick}) => {
  return (
    <ul className="movie-nav__list">
      <li onClick={(evt)=>onTabClick(evt, `Overview`)} className="movie-nav__item movie-nav__item--active">
        <a href="#" className="movie-nav__link">Overview</a>
      </li>
      <li onClick={(evt)=>onTabClick(evt, `Details`)} className="movie-nav__item">
        <a href="#" className="movie-nav__link">Details</a>
      </li>
      <li onClick={(evt)=>onTabClick(evt, `Reviews`)} className="movie-nav__item">
        <a href="#" className="movie-nav__link">Reviews</a>
      </li>
    </ul>
  );
};

export default Tabs;

Tabs.propTypes = {
  onTabClick: PropTypes.func.isRequired,
};
