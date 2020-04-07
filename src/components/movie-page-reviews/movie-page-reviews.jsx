import React from "react";
import PropTypes from "prop-types";
import {transformDate, sliceArray, TRANSFORM_TYPES} from "../util/util.js";

const renderComment = (comment) => {
  const {commentId, commentText, commentatorName, commentTime, commentRating} = comment;
  const commentTimeText = transformDate(commentTime, TRANSFORM_TYPES.TO_COMMENT_DATE);
  const commentTimeAttribute = transformDate(commentTime, TRANSFORM_TYPES.TO_COMMENT_ATTRIBUTE);
  return (
    <div key={commentId} className="review">
      <blockquote className="review__quote">
        <p className="review__text">{commentText}</p>

        <footer className="review__details">
          <cite className="review__author">{commentatorName}</cite>
          <time className="review__date" dateTime={commentTimeAttribute}>{commentTimeText}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{commentRating}</div>
    </div>
  );
};

const MoviePageReviews = ({filmData}) => {
  const {comments} = filmData;
  const newArrayComment = sliceArray(comments);

  return (
    <div className="movie-card__reviews movie-card__row">
      {newArrayComment && newArrayComment.map((it, i)=>
        (<div key={i} className="movie-card__reviews-col">
          {it.map((com)=> renderComment(com))}
        </div>))}
    </div>
  );
};

MoviePageReviews.propTypes = {
  filmData: PropTypes.shape({
    comments: PropTypes.array.isRequired,
  }).isRequired,
};
export default MoviePageReviews;

