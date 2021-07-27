import React from 'react';
import {useSelector} from 'react-redux';
import {getOffersByCities} from '../../store/app-data/selectors';
import FavoriteItem from '../favorite-item/favorite-item';

export default function FavoritesScreen(props) {
  const offerByCities = useSelector(getOffersByCities);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.entries(offerByCities).map(([city, offers]) => (
              offers.length > 0 && <FavoriteItem key={city} city={city} offers={offers}/>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
