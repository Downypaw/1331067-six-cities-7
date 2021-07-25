import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review';
import reviewProp from '../props-validation/review.prop';
import {MAX_REVIEWS_COUNT} from '../../const';

export default function ReviewsList(props) {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews
        .slice()
        .sort((review1, review2) => new Date(review2.date) - new Date(review1.date))
        .slice(0, MAX_REVIEWS_COUNT)
        .map((review) => <Review key={`${review.id}`} review={review}/>)}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};
