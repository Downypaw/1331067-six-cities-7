import {ActionType} from '../action';
import {City} from '../../const';

const initialState = {
  activeCity: City.PARIS,
};

const appInteraction = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload,
      };
    default:
      return state;
  }
};


export {appInteraction};
