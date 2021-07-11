import {createReducer} from '@reduxjs/toolkit';
import {loadOffers, updateOffer, loadFullOfferInformation, updateReviews, loadFavoriteOffers} from '../action';

const initialState = {
  offers: [],
  isOffersLoaded: false,
  fullOfferInformation: {},
  isFullOfferInformationLoaded: false,
  favoriteOffers: [],
  isFavoriteOffersLoaded: false,
};

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoaded = true;
    })
    .addCase(updateOffer, (state, action) => {
      const index = state.offers.findIndex((offer) => offer.id === action.payload.id);
      state.offers = [
        ...state.offers.slice(0, index),
        action.payload,
        ...state.offers.slice(index + 1),
      ];
    })
    .addCase(loadFullOfferInformation, (state, action) => {
      state.fullOfferInformation = {
        detailedOffer: action.payload.detailedOfferData,
        nearbyOffers: action.payload.nearbyOffersData,
        reviews: action.payload.reviewsData,
      };
      state.isFullOfferInformationLoaded = true;
    })
    .addCase(updateReviews, (state, action) => {
      state.fullOfferInformation = {
        ...state.fullOfferInformation,
        reviews: action.payload,
      };
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
      state.isFavoriteOffersLoaded = true;
    });
});

export {appData};
