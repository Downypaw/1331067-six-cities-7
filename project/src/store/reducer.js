import {ActionType} from './action';
import {City, AuthorizationStatus} from '../const';

const initialState = {
  activeCity: City.PARIS,
  offers: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
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
        isDataLoaded: true,
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
    default:
      return state;
  }
};


export {reducer};
