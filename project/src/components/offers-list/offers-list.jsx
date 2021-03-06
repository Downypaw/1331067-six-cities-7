import React from 'react';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../card/card';
import Map from '../map/map';
import Sorting from '../sorting/sorting';
import {MapType} from '../../const';
import {getActiveSortOption} from '../../store/app-interaction/selectors';
import {getSortedOffers} from '../../store/app-data/selectors';
import {changeSortOption} from '../../store/action';

export default function OffersList(props) {
  const [selectedPoint, setSelectedPoint] = useState(0);

  const {activeCity} = props;

  const dispatch = useDispatch();

  const sortedOffers = useSelector(getSortedOffers);
  const activeOption = useSelector(getActiveSortOption);

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
    dispatch(changeSortOption(option));
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{sortedOffers.length} places to stay in {activeCity}</b>
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
  activeCity: PropTypes.string.isRequired,
};
