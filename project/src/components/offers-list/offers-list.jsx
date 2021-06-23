import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import Map from '../map/map';
import Sorting from '../sorting/sorting';
import offerProp from '../props-validation/offer.prop';
import {MapType, SortingType, SortingProperty, SortingDirection} from '../../const';
import {sortByProperty} from '../../util/sorting';

export default function OffersList(props) {
  const [selectedPoint, setSelectedPoint] = useState(0);
  const [activeOption, setActiveOption] = useState(SortingType.POPULAR);

  const {offers, activeCity} = props;

  const getSortedOffers = (optionType) => {
    switch (optionType) {
      case SortingType.TO_HIGHT_PRICE:
        return offers.slice().sort(sortByProperty(SortingProperty.PRICE));
      case SortingType.TO_LOW_PRICE:
        return offers.slice().sort(sortByProperty(SortingProperty.PRICE, SortingDirection.DECREASING));
      case SortingType.TOP_RATED:
        return offers.slice().sort(sortByProperty(SortingProperty.RATING, SortingDirection.DECREASING));
      default:
        return offers;
    }
  };

  const sortedOffers = getSortedOffers(activeOption);

  const cityLocation = sortedOffers[0].city.location;
  const points = sortedOffers.map((offer) => ({
    offerId: offer.id,
    offerCords: [offer.location.latitude, offer.location.longitude],
    zoom: offer.location.zoom,
  }));

  const onOfferHover = (offerId) => {
    const currentPoint = points.find((point) =>
      point.offerId === offerId,
    );
    setSelectedPoint(currentPoint.offerId);
  };

  const onOptionChange = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {activeCity}</b>
        <Sorting activeOption={activeOption} onOptionChange={onOptionChange}/>
        <div className="cities__places-list places__list tabs__content">
          {sortedOffers.map((offer) => (
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
