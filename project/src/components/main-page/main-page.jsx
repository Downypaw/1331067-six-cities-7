import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeCity} from '../../store/action';
import OffersList from '../offers-list/offers-list';
import EmptyOffersList from '../empty-offers-list/empty-offers-list';
import Header from '../header/header';
import CitiesList from '../cities-list/cities-list';
import offerProp from '../props-validation/offer.prop';

export function MainPage(props) {
  const {offers, activeCity, onCityChange} = props;
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
  activeCity: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
};

const mapStateToProps = ({INTERACTION}) => ({
  activeCity: INTERACTION.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange(activeCity) {
    dispatch(changeCity(activeCity));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
