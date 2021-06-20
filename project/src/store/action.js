export const ActionType = {
  CHANGE_CITY: '/cityChange',
  GET_OFFERS: '/getOffers',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  getOffers: () => ({
    type: ActionType.FILTER_OFFERS,
  }),
};
