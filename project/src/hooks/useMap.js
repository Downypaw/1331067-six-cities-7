import {useEffect, useState} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function useMap(mapRef, cityLocation, points, selectedPoint) {
  const [map, setMap] = useState(null);
  const {latitude, longitude, zoom} = cityLocation;
  const city = [latitude, longitude];

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: city,
        zoom: zoom,
        zoomControl: false,
        marker: true,
      });
      instance.setView(city, zoom);

      leaflet
        .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        })
        .addTo(instance);
      setMap(instance);
    }
  }, [mapRef, map, city]);

  useEffect(() => {
    const icon = leaflet.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
    });

    const activeIcon = leaflet.icon({
      iconUrl: 'img/pin-active.svg',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
    });

    if (map) {
      points.forEach((point) => {
        leaflet
          .marker(point.offerCords,
            {icon: (point.offerId === selectedPoint)
              ? activeIcon
              : icon,
            })
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return map;
}
