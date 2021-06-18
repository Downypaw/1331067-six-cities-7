import React from 'react';
import offerProp from '../props-validation/offer.prop';
import CardInformation from '../card-information/card-information';

export default function NearPlaceCard(props) {
  const {offer} = props;
  const {previewImage, isPremium} = offer;

  return (
    <article className="near-places__card place-card">
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="near-places__image-wrapper place-card__image-wrapper">
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

NearPlaceCard.propTypes = {
  offer: offerProp,
};
