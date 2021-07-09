import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {changeCity} from '../../store/action';
import OffersList from '../offers-list/offers-list';
import EmptyOffersList from '../empty-offers-list/empty-offers-list';
import Header from '../header/header';
import CitiesList from '../cities-list/cities-list';
import offerProp from '../props-validation/offer.prop';
import {getActiveCity} from '../../store/app-interaction/selectors';

export default function MainPage(props) {
  const {offers} = props;

  const activeCity = useSelector(getActiveCity);

  const dispatch = useDispatch();

  const onCityChange = (city) => {
    dispatch(changeCity(city));
  };

  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList activeCity={activeCity} onCityChange={onCityChange}/>
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
