import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../props-validation/offer.prop';
import {City} from '../../const';
import Header from '../header/header';
import FavoriteItem from '../favorite-item/favorite-item';

export default function FavoritesScreen(props) {
  const {offers} = props;

  const offersByCities = {
    [City.PARIS]: offers.filter((offer) => offer.city.name === City.PARIS),
    [City.COLOGNE]: offers.filter((offer) => offer.city.name === City.COLOGNE),
    [City.BRUSSELS]: offers.filter((offer) => offer.city.name === City.BRUSSELS),
    [City.AMSTERDAM]: offers.filter((offer) => offer.city.name === City.AMSTERDAM),
    [City.HAMBURG]: offers.filter((offer) => offer.city.name === City.HAMBURG),
    [City.DUSSELDORF]: offers.filter((offer) => offer.city.name === City.DUSSELDORF),
  };

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(offersByCities).map(([key, value]) => (
                value.length > 0 && <FavoriteItem key={key} city={key} offers={value}/>
              ))}
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

FavoritesScreen.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};
