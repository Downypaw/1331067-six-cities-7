import {createSelector} from 'reselect';
import {NameSpace, SortType, SortProperty, SortDirection, City} from '../../const';
import {sortByProperty} from '../../util/sorting';
import {getActiveCity, getActiveSortOption} from '../app-interaction/selectors';

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getLoadedOffersStatus = (state) => state[NameSpace.DATA].isOffersLoaded;
export const getFullOfferInformation = (state) => state[NameSpace.DATA].fullOfferInformation;
export const getLoadedFullInformationStatus = (state) => state[NameSpace.DATA].isFullOfferInformationLoaded;
export const getFavoriteOffers = (state) => state[NameSpace.DATA].favoriteOffers;
export const getLoadedFavoriteOffersStatus = (state) => state[NameSpace.DATA].isFavoriteOffersLoaded;

export const getFiltratedOffers = createSelector(
  [getOffers, getActiveCity],
  (offers, activeCity) => offers.filter((offer) => offer.city.name === activeCity),
);

export const getSortedOffers = createSelector(
  [getFiltratedOffers, getActiveSortOption],
  (filtratedOffers, activeSortOption) => {
    switch (activeSortOption) {
      case SortType.TO_HIGH_PRICE:
        return filtratedOffers.slice().sort(sortByProperty(SortProperty.PRICE));
      case SortType.TO_LOW_PRICE:
        return filtratedOffers.slice().sort(sortByProperty(SortProperty.PRICE, SortDirection.DESCENDING));
      case SortType.TOP_RATED:
        return filtratedOffers.slice().sort(sortByProperty(SortProperty.RATING, SortDirection.DESCENDING));
      default:
        return filtratedOffers;
    }
  },
);

export const getOffersByCities = createSelector(
  getFavoriteOffers,
  (favoriteOffers) => {
    const cities = Object.values(City);
    const offersByCities = cities.reduce((accumulator, currentValue) => {
      accumulator[currentValue] = [];
      return accumulator;
    }, {});

    for (let i = 0; i < favoriteOffers.length; i++) {
      offersByCities[favoriteOffers[i].city.name].push(favoriteOffers[i]);
    }

    return offersByCities;
  },
);
