import {ActionType} from '../action';
import {City} from '../../const';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity} from '../action';

const initialState = {
  activeCity: City.PARIS,
};

const appInteraction = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
});

export {appInteraction};
