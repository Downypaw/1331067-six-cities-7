import React from 'react';
import PropTypes from 'prop-types';
import {useRef} from 'react';
import useMap from '../../hooks/use-map';
import {MapType} from '../../const';

export default function Map({type, cityLocation, points, selectedPoint}) {
  const mapRef = useRef(null);
  useMap(mapRef, cityLocation, points, selectedPoint);

  return (
    <section className={`${type}__map map`}
      style={type !== MapType.OFFER_PAGE
        ? {height: '100%'}
        : {}}
      ref={mapRef}
    >
    </section>
  );
}

Map.propTypes = {
  type: PropTypes.string.isRequired,
  cityLocation: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
  points: PropTypes.arrayOf(
    PropTypes.shape({
      offerId: PropTypes.number.isRequired,
      offerCords: PropTypes.arrayOf(PropTypes.number).isRequired,
      zoom: PropTypes.number.isRequired,
    }),
  ),
  selectedPoint: PropTypes.number,
};
