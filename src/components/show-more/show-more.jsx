import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app-status/app-status.js";


const ShowMore = ({onShowMore}) =>(
  <div className="catalog__more">
    <button onClick={onShowMore} className="catalog__button" type="button">Show more</button>
  </div>
);

ShowMore.propTypes = {
  onShowMore: PropTypes.func.isRequired,
};

const mapStateToDispatch = (dispatch) => ({
  onShowMore() {
    dispatch(ActionCreator.showMore());
  }
});

export {ShowMore};
export default connect(null, mapStateToDispatch)(ShowMore);


