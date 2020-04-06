import React from "react";
import PropTypes from "prop-types";
import {transformDate, TRANSFORM_TYPES} from "../util/util.js";

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
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {comments.slice(0, 3).map((comment)=> renderComment(comment))}
      </div>
      <div className="movie-card__reviews-col">
        {comments.slice(3).map((comment)=> renderComment(comment))}
      </div>
    </div>
  );
};

MoviePageReviews.propTypes = {
  filmData: PropTypes.shape({
    comments: PropTypes.array.isRequired,
  }).isRequired,
};
export default MoviePageReviews;
