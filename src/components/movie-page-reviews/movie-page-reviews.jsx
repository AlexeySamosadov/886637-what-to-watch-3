import React from "react";
import PropTypes from "prop-types";

const renderComment = (comment) => {
  const {commentId, commentText, commentatorName, commentTime, commentRating} = comment;
  console.log(`commentTime`, commentTime);
  return (
    <div key={commentId} className="review">
      <blockquote className="review__quote">
        <p className="review__text">{commentText}</p>

        <footer className="review__details">
          <cite className="review__author">{commentatorName}</cite>
          <time className="review__date" dateTime="2016-12-20">5</time>
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


//         <div className="review">
//           <blockquote className="review__quote">
//             <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious
//               Mittel-European kitsch of one of the director`&apos;`s funniest and most exquisitely designed movies in
//               years.</p>
//
//             <footer className="review__details">
//               <cite className="review__author">Kate Muir</cite>
//               <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
//             </footer>
//           </blockquote>
//
//           <div className="review__rating">8,9</div>
//         </div>
//
//         <div className="review">
//           <blockquote className="review__quote">
//             <p className="review__text">Anderson`&apos;`s films are too precious for some, but for those of us willing to lose
//               ourselves in them, they`&apos;`re a delight. `&apos;`The Grand Budapest Hotel`&apos;` is no different, except that he has added
//               a hint of gravitas to the mix, improving the recipe.</p>
//
//             <footer className="review__details">
//               <cite className="review__author">Bill Goodykoontz</cite>
//               <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
//             </footer>
//           </blockquote>
//
//           <div className="review__rating">8,0</div>
//         </div>
//
//         <div className="review">
//           <blockquote className="review__quote">
//             <p className="review__text">I didn`&apos;`t find it amusing, and while I can appreciate the creativity, it`&apos;`s an
//               hour and 40 minutes I wish I could take back.</p>
//
//             <footer className="review__details">
//               <cite className="review__author">Amanda Greever</cite>
//               <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
//             </footer>
//           </blockquote>
//
//           <div className="review__rating">8,0</div>
//         </div>
