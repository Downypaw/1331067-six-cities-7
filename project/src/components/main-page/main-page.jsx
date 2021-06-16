import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';
import OffersList from '../offers-list/offers-list';
import EmptyOffersList from '../empty-offers-list/empty-offers-list';
import Header from '../header/header';
import offerProp from '../props-validation/offer.prop';
import {City} from '../../const';

export default function MainPage(props) {
  const [activeCity, setActiveCity] = useState(City.PARIS);
  const {offers} = props;
  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a
                  className={`locations__item-link tabs__item ${activeCity === City.PARIS ? 'tabs__item--active' : ''}`} href="#"
                  onClick={() => setActiveCity(City.PARIS)}
                >
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a
                  className={`locations__item-link tabs__item ${activeCity === City.COLOGNE ? 'tabs__item--active' : ''}`} href="#"
                  onClick={() => setActiveCity(City.COLOGNE)}
                >
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a
                  className={`locations__item-link tabs__item ${activeCity === City.BRUSSELS ? 'tabs__item--active' : ''}`} href="#"
                  onClick={() => setActiveCity(City.BRUSSELS)}
                >
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a
                  className={`locations__item-link tabs__item ${activeCity === City.AMSTERDAM ? 'tabs__item--active' : ''}`} href="#"
                  onClick={() => setActiveCity(City.AMSTERDAM)}
                >
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a
                  className={`locations__item-link tabs__item ${activeCity === City.HAMBURG ? 'tabs__item--active' : ''}`} href="#"
                  onClick={() => setActiveCity(City.HAMBURG)}
                >
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a
                  className={`locations__item-link tabs__item ${activeCity === City.DUSSELDORF ? 'tabs__item--active' : ''}`} href="#"
                  onClick={() => setActiveCity(City.DUSSELDORF)}
                >
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          {filteredOffers.length > 0
            ? <OffersList activeCity={activeCity} offers={filteredOffers}/>
            : <EmptyOffersList/>}
        </div>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};
