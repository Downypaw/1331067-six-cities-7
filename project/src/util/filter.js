import {City} from '../const';

export const filter = {
  [City.PARIS]: (offers) => offers.filter((offer) => offer.city.name === City.PARIS),
  [City.COLOGNE]: (offers) => offers.filter((offer) => offer.city.name === City.COLOGNE),
  [City.BRUSSELS]: (offers) => offers.filter((offer) => offer.city.name === City.BRUSSELS),
  [City.AMSTERDAM]: (offers) => offers.filter((offer) => offer.city.name === City.AMSTERDAM),
  [City.HAMBURG]: (offers) => offers.filter((offer) => offer.city.name === City.HAMBURG),
  [City.DUSSELDORF]: (offers) => offers.filter((offer) => offer.city.name === City.DUSSELDORF),
};
