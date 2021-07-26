import React from 'react';
import {Link} from 'react-router-dom';
import FavoriteButton from '../favorite-button/favorite-button';
import {FavoriteButtonType} from '../../const';
import {capitalizeFirstLetter} from '../../util/offer';
import offerProp from '../props-validation/offer.prop';

export default function CardInformation(props) {
  const {offer} = props;
  const {id, price, isFavorite, rating, title, type} = offer;

  return (
    <React.Fragment>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <FavoriteButton id={id} isFavorite={isFavorite} pageType={FavoriteButtonType.CARD}/>
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
      <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
    </React.Fragment>
  );
}

CardInformation.propTypes = {
  offer: offerProp,
};
