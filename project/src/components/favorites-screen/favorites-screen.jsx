import React from 'react';
import {useSelector} from 'react-redux';
import {getFavoriteOffers} from '../../store/app-data/selectors';
import {City} from '../../const';
import Header from '../header/header';
import FavoriteItem from '../favorite-item/favorite-item';

export default function FavoritesScreen() {
  const favoriteOffers = useSelector(getFavoriteOffers);

  const getOffersByCity = (city) => favoriteOffers.filter((favoriteOffer) => favoriteOffer.city.name === city);

  return (
    <div className="page">
      <Header />

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
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}
