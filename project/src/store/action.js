import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'cityList/cityChange',
  LOAD_OFFERS: 'data/loadOffers',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'signIn/redirectToRoute',
  UPDATE_OFFER: 'bookmark/updateOffer',
  LOAD_FULL_OFFER_INFORMATION: 'data/loadFullOfferInformation',
  UPDATE_REVIEWS: 'comments/updateReviews',
  LOAD_FAVORITE_OFFERS: 'favorites/loadFavoriteOffers',
  CHANGE_SORT_OPTION: 'sorting/changeSortOption',
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({
  payload: city,
}));

export const changeSortOption = createAction(ActionType.CHANGE_SORT_OPTION, (option) => ({
  payload: option,
}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const makeLogout = createAction(ActionType.LOGOUT);

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export const updateOffer = createAction(ActionType.UPDATE_OFFER, (offer) => ({
  payload: offer,
}));

export const loadFullOfferInformation = createAction(ActionType.LOAD_FULL_OFFER_INFORMATION, (detailedOfferData, nearbyOffersData, reviewsData) => ({
  payload: {detailedOfferData, nearbyOffersData, reviewsData},
}));

export const updateReviews = createAction(ActionType.UPDATE_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export const loadFavoriteOffers = createAction(ActionType.LOAD_FAVORITE_OFFERS, (favoriteOffers) => ({
  payload: favoriteOffers,
}));
