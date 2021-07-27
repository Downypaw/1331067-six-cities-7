import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeCity} from '../../store/action';
import OffersList from '../offers-list/offers-list';
import EmptyOffersList from '../empty-offers-list/empty-offers-list';
import Header from '../header/header';
import CitiesList from '../cities-list/cities-list';
import {getActiveCity} from '../../store/app-interaction/selectors';
import {getFiltratedOffers} from '../../store/app-data/selectors';

export default function MainPage(props) {

  const activeCity = useSelector(getActiveCity);

  const dispatch = useDispatch();

  const onCityChange = (city) => {
    dispatch(changeCity(city));
  };

  const filteredOffers = useSelector(getFiltratedOffers);

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
