import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../props-validation/offer.prop';
import CardInformation from '../card-information/card-information';

export default function Card(props) {
  const {offer, onOfferHover} = props;
  const {id, previewImage, isPremium} = offer;

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={() => {
        onOfferHover(id);
      }}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <CardInformation offer={offer}/>
      </div>
    </article>
  );
}

Card.propTypes = {
  offer: offerProp,
  onOfferHover: PropTypes.func.isRequired,
};
