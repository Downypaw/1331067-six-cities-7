import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import offerProp from '../props-validation/offer.prop';

export default function OffersList(props) {
  const {offers} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Card key={offer.id} offer={offer}/>)}
    </div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};
