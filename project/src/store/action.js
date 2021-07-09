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

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});

export const getOffers = () => ({
  type: ActionType.FILTER_OFFERS,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const makeLogout = () => ({
  type: ActionType.LOGOUT,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const updateOffer = (offer) => ({
  type: ActionType.UPDATE_OFFER,
  payload: offer,
});

export const loadFullOfferInformation = (detailedOfferData, nearbyOffersData, reviewsData) => ({
  type: ActionType.LOAD_FULL_OFFER_INFORMATION,
  payload: {detailedOfferData, nearbyOffersData, reviewsData},
});

export const updateReviews = (reviews) => ({
  type: ActionType.UPDATE_REVIEWS,
  payload: reviews,
});
