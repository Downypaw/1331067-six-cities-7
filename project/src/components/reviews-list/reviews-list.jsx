import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review';
import reviewProp from '../props-validation/review.prop';

export default function ReviewsList(props) {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => <Review key={`${review.id}`} review={review}/>)}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};
