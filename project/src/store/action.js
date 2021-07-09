import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: '/cityChange',
  LOAD_OFFERS: 'data/loadOffers',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: '/redirectToRoute',
  UPDATE_OFFER: '/updateOffer',
  LOAD_FULL_OFFER_INFORMATION: 'data/loadFullOfferInformation',
  UPDATE_REVIEWS: 'comments/updateReviews',
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({
  payload: city,
}));

export const getOffers = createAction(ActionType.FILTER_OFFERS);

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
