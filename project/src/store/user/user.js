import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, makeLogout} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(makeLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    });
});

export {user};
