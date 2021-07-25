import React from 'react';
import PropTypes from 'prop-types';
import {City} from '../../const';
import FavoriteItem from '../favorite-item/favorite-item';
import offerProp from '../props-validation/offer.prop';

export default function FavoritesScreen(props) {
  const {favoriteOffers} = props;

  const getOffersByCity = (city) => favoriteOffers.filter((favoriteOffer) => favoriteOffer.city.name === city);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.values(City).map((city) => {
              const offersByCity = getOffersByCity(city);
              return offersByCity.length > 0 && <FavoriteItem key={city} city={city} offers={offersByCity}/>;
            })}
          </ul>
        </section>
      </div>
    </main>
  );
}

FavoritesScreen.propTypes = {
  favoriteOffers: PropTypes.arrayOf(offerProp).isRequired,
};
