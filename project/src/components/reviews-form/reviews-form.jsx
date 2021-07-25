import React from 'react';
import {useState} from 'react';
import {postComment} from '../../store/api-actions';
import {getFullOfferInformation} from '../../store/app-data/selectors';
import {useSelector, useDispatch} from 'react-redux';
import {toast} from '../../util/toast';

export default function ReviewsForm() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSending, setSendingStatus] = useState(false);

  const offerId = useSelector(getFullOfferInformation).detailedOffer.id;

  const dispatch = useDispatch();

  const resetForm = () => {
    setRating(0);
    setComment('');
    setSendingStatus(false);
  };

  const badSubmittingHandle = () => {
    resetForm();
    toast('Не получилось отправить комментарий, проверьте ваше соединение');
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setSendingStatus(true);

    dispatch(postComment(offerId, {comment, rating}, resetForm, badSubmittingHandle));
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
          disabled={isSending}
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
          disabled={isSending}
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
          disabled={isSending}
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
          disabled={isSending}
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
          disabled={isSending}
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
        disabled={isSending}
        data-testid="comment"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={comment.length < 50 || comment.length > 300 || rating === 0 || isSending}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
