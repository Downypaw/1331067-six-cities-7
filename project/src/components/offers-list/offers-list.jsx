import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import Map from '../map/map';
import offerProp from '../props-validation/offer.prop';
import {MapType} from '../../const';

export default function OffersList(props) {
  const [selectedPoint, setSelectedPoint] = useState(0);

  const {offers, activeCity} = props;

  const onOfferHover = (offerId) => {
    const currentPoint = points.find((point) =>
      point.offerId === offerId,
    );
    setSelectedPoint(currentPoint.offerId);
  };

  const cityLocation = offers[0].city.location;
  const points = offers.map((offer) => ({
    offerId: offer.id,
    offerCords: [offer.location.latitude, offer.location.longitude],
    zoom: offer.location.zoom,
  }));

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {activeCity}</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex="0">
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex="0">Popular</li>
            <li className="places__option" tabIndex="0">Price: low to high</li>
            <li className="places__option" tabIndex="0">Price: high to low</li>
            <li className="places__option" tabIndex="0">Top rated first</li>
          </ul>
        </form>
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) => (
            <Card
              key={offer.id}
              offer={offer}
              onOfferHover={onOfferHover}
            />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map type={MapType.MAIN_PAGE} cityLocation={cityLocation} points={points} selectedPoint={selectedPoint}/>
        </section>
      </div>
    </div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  activeCity: PropTypes.string.isRequired,
};
