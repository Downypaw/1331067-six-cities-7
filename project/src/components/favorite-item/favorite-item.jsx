import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../props-validation/offer.prop';
import FavoriteCard from '../favorite-card/favorite-card';

function FavoriteItem(props) {
  const {city, offers} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <FavoriteCard key={offer.id} offer={offer}/>)}
      </div>
    </li>
  );
}

FavoriteItem.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

export default FavoriteItem;
