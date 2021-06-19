import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {AppRoute} from '../../const';
import offerProp from '../props-validation/offer.prop';

export default function CardInformation(props) {
  const {offer} = props;
  const {id, price, isFavorite, rating, title, type} = offer;

  const history = useHistory();

  return (
    <React.Fragment>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active': ''} button`} onClick={() => history.push(AppRoute.SIGN_IN)} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${Math.round(100 / 5 * rating)}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${id}`}>{title}</Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </React.Fragment>
  );
}

CardInformation.propTypes = {
  offer: offerProp,
};
