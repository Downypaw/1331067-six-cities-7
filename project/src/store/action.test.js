import {
  changeCity,
  loadOffers,
  requireAuthorization,
  makeLogout,
  redirectToRoute,
  updateOffer,
  loadFullOfferInformation,
  updateReviews,
  loadFavoriteOffers,
  ActionType
} from './action';

describe('Actions', () => {
  it('action creator for changing city returns correct action', () => {
    const city = '';

    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: city,
    };

    expect(changeCity(city)).toEqual(expectedAction);
  });

  it('action creator for loading offers returns correct action', () => {
    const offers = [];

    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };

    expect(loadOffers(offers)).toEqual(expectedAction);
  });

  it('action creator for authorization process returns correct action', () => {
    const status = '';

    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };

    expect(requireAuthorization(status)).toEqual(expectedAction);
  });

  it('action creator for logout process returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(makeLogout()).toEqual(expectedAction);
  });

  it('action creator for redirecting to route returns correct action', () => {
    const url = '';

    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: url,
    };

    expect(redirectToRoute(url)).toEqual(expectedAction);
  });

  it('action creator for updating offer returns correct action', () => {
    const offer = {};

    const expectedAction = {
      type: ActionType.UPDATE_OFFER,
      payload: offer,
    };

    expect(updateOffer(offer)).toEqual(expectedAction);
  });

  it('action creator for loading full offer information returns correct action', () => {
    const detailedOfferData = {};
    const nearbyOffersData = [];
    const reviewsData = [];

    const expectedAction = {
      type: ActionType.LOAD_FULL_OFFER_INFORMATION,
      payload: {detailedOfferData, nearbyOffersData, reviewsData},
    };

    expect(loadFullOfferInformation(detailedOfferData, nearbyOffersData, reviewsData)).toEqual(expectedAction);
  });

  it('action creator for updating reviews returns correct action', () => {
    const reviews = [];

    const expectedAction = {
      type: ActionType.UPDATE_REVIEWS,
      payload: reviews,
    };

    expect(updateReviews(reviews)).toEqual(expectedAction);
  });

  it('action creator for loading favorite offers returns correct action', () => {
    const favoriteOffers = [];

    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: favoriteOffers,
    };

    expect(loadFavoriteOffers(favoriteOffers)).toEqual(expectedAction);
  });
});
