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
              {Object.values(City).map((city) => (
                <li className="locations__item" key={city}>
                  <a
                    className={`locations__item-link tabs__item ${activeCity === city ? 'tabs__item--active' : ''}`} href="#"
                    onClick={() => setActiveCity(city)}
                  >
                    <span>{city}</span>
                  </a>
                </li>
              ))}
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
