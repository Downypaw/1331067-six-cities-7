import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useState} from 'react';
import {postComment} from '../../store/api-actions';

export function ReviewsForm(props) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const {onSubmit, offerId} = props;

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit(
      offerId,
      {comment, rating},
    );

    setRating(0);
    setComment('');
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit} action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"
          onChange={(evt) => {
            setRating(Number(evt.target.value));
          }}
          checked={rating === 5}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"
          onChange={(evt) => {
            setRating(Number(evt.target.value));
          }}
          checked={rating === 4}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"
          onChange={(evt) => {
            setRating(Number(evt.target.value));
          }}
          checked={rating === 3}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"
          onChange={(evt) => {
            setRating(Number(evt.target.value));
          }}
          checked={rating === 2}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"
          onChange={(evt) => {
            setRating(Number(evt.target.value));
          }}
          checked={rating === 1}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea" value={comment} id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(evt) => {
          setComment(evt.target.value);
        }}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={comment.length < 50 || comment.length > 300 || rating === 0}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

ReviewsForm.propTypes = {
  offerId: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offerId: state.detailedData.detailedOffer.id,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(offerId, commentData) {
    dispatch(postComment(offerId, commentData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsForm);
