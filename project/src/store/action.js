export const ActionType = {
  CHANGE_CITY: '/cityChange',
  LOAD_OFFERS: 'data/loadOffers',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: '/redirectToRoute',
  UPDATE_OFFER: '/updateOffer',
  LOAD_DETAILED_DATA: 'data/loadDetailedData',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  getOffers: () => ({
    type: ActionType.FILTER_OFFERS,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  updateOffer: (offer) => ({
    type: ActionType.UPDATE_OFFER,
    payload: offer,
  }),
  loadDetailedData: (detailedOfferData, nearbyOffersData, reviewsData) => ({
    type: ActionType.LOAD_DETAILED_DATA,
    payload: {detailedOfferData, nearbyOffersData, reviewsData},
  }),
};
