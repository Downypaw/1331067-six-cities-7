import {City} from '../../const';
import {appInteraction} from './app-interaction';
import {ActionType} from '../action';

describe('Reducer: appInteraction', () => {
  it('without additional parameters should return initial state', () => {
    expect(appInteraction(undefined, {}))
      .toEqual({activeCity: City.PARIS});
  });

  it('should change active city by a given value', () => {
    const state = {activeCity: City.PARIS};
    const city = '';

    const changeCityAction = {
      type: ActionType.CHANGE_CITY,
      payload: city,
    };

    expect(appInteraction(state, changeCityAction))
      .toEqual({activeCity: city});

    const nonChangeCityAction = {
      type: ActionType.CHANGE_CITY,
      payload: City.PARIS,
    };

    expect(appInteraction(state, nonChangeCityAction))
      .toEqual({activeCity: City.PARIS});
  });
});
