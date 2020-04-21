import React from "react";
import PropTypes from "prop-types";
import {ACTIVE_TABS} from "../const/const.js";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app-status/app-status.js";
import {getActiveTab} from "../../reducer/app-status/selectors";


const Tabs = ({activeTab, onTabClick}) => {
  return (
    <ul className="movie-nav__list">
      <li onClick={(evt)=>{
        onTabClick(evt, ACTIVE_TABS.OVERVIEW);
      }} className={`movie-nav__item ${activeTab === ACTIVE_TABS.OVERVIEW && `movie-nav__item--active`}`}>
        <a href="#" className="movie-nav__link">Overview</a>
      </li>
      <li onClick={(evt)=>{
        onTabClick(evt, ACTIVE_TABS.DETAILS);
      }} className={`movie-nav__item ${activeTab === ACTIVE_TABS.DETAILS && `movie-nav__item--active`}`}>
        <a href="#" className="movie-nav__link">Details</a>
      </li>
      <li onClick={(evt)=>{
        onTabClick(evt, ACTIVE_TABS.REVIEWS);
      }} className={`movie-nav__item ${activeTab === ACTIVE_TABS.REVIEWS && `movie-nav__item--active`}`}>
        <a href="#" className="movie-nav__link">Reviews</a>
      </li>
    </ul>
  );
};

export {Tabs};
const mapStateToProps = (state) => ({
  activeTab: getActiveTab(state),
});

const mapStateToDispatch = (dispatch) => ({
  onTabClick(evt, activeTab) {
    evt.preventDefault();
    dispatch(ActionCreator.setActiveTab(activeTab));
  }
});
export default connect(mapStateToProps, mapStateToDispatch)(Tabs);

Tabs.propTypes = {
  onTabClick: PropTypes.func,
  activeTab: PropTypes.string,
};
