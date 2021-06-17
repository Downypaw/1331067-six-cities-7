import React from 'react';
import PropTypes from 'prop-types';
import {useRef} from 'react';
import useMap from '../../hooks/useMap';

export default function Map({cityLocation, points, selectedPoint}) {
  const mapRef = useRef(null);
  useMap(mapRef, cityLocation, points, selectedPoint);

  return (
    <section className="cities__map map"
      style={{height: '100%'}}
      ref={mapRef}
    >
    </section>
  );
}

Map.propTypes = {
  cityLocation: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
  points: PropTypes.shape({
    offerId: PropTypes.number.isRequired,
    offerCords: PropTypes.arrayOf(PropTypes.number).isRequired,
    zoom: PropTypes.number.isRequired,
  }),
  selectedPoint: PropTypes.number.isRequired,
};
