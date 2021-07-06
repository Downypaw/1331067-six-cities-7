import {ActionType} from './action';
import {City, AuthorizationStatus} from '../const';

const initialState = {
  activeCity: City.PARIS,
  offers: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isOffersLoaded: false,
  detailedOffer: {},
  nearbyOffers: [],
  reviews: [],
  detailedData: {},
  isDetailedDataLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload,
      };
    case ActionType.FILTER_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isOffersLoaded: true,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    case ActionType.UPDATE_OFFER: {
      const index = state.offers.findIndex((offer) => offer.id === action.payload.id);
      return {
        ...state,
        offers: [
          ...state.offers.slice(0, index),
          action.payload,
          ...state.offers.slice(index + 1),
        ],
      };
    }
    case ActionType.LOAD_DETAILED_DATA:
      return {
        ...state,
        detailedData: {
          detailedOffer: action.payload.detailedOfferData,
          nearbyOffers: action.payload.nearbyOffersData,
          reviews: action.payload.reviewsData,
        },
        isDetailedDataLoaded: true,
      };
    case ActionType.UPDATE_REVIEWS:
      return {
        ...state,
        detailedData: {
          ...state.detailedData,
          reviews: action.payload,
        },
      };
    default:
      return state;
  }
};


export {reducer};
