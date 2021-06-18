import React from 'react';
import offerProp from '../props-validation/offer.prop';
import CardInformation from '../card-information/card-information';

export default function FavoriteCard(props) {
  const {offer} = props;
  const {previewImage, isPremium} = offer;

  return (
    <article className="favorites__card place-card">
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image"/>
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <CardInformation offer={offer}/>
      </div>
    </article>
  );
}

FavoriteCard.propTypes = {
  offer: offerProp,
};
