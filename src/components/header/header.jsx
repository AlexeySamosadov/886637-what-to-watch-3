import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app-status/app-status.js";

// Почемуто при рендеренге в Main не принимает функцию из Reducer;
const Header = ({closeMoviePage})=> {
  const closePopup = (e) => {
    e.preventDefault();
    if (closeMoviePage) {
      closeMoviePage();
    }
  };
  return (
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
  );
};

Header.propTypes = {
  closeMoviePage: PropTypes.func,
};
const mapStateToDispatch = (dispatch) => ({
  closeMoviePage() {
    dispatch(ActionCreator.showPopup());
  }
});

export {Header};
export default connect(null, mapStateToDispatch)(Header);
