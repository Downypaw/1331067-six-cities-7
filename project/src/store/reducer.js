import {ActionType} from './action';
import {City} from '../../const';
import offers from '../mocks/offers';

const initialState = {
  city: City.PARIS,
  offers: offers,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.FILTER_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };
    default:
      return state;
  }
};


export {reducer};
