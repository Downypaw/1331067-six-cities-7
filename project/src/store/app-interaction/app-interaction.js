import {City, SortType} from '../../const';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSortOption} from '../action';

const initialState = {
  activeCity: City.PARIS,
  activeSortOption: SortType.POPULAR,
};

const appInteraction = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(changeSortOption, (state, action) => {
      state.activeSortOption = action.payload;
    });
});

export {appInteraction};
