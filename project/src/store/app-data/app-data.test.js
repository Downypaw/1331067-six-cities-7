import {appData} from './app-data';
import {offers, reviews, updatedOffer} from './app-data-mock';
import {ActionType} from '../action';

describe('Reducer: appData', () => {
  it('without additional parameters should return initial state', () => {
    expect(appData(undefined, {}))
      .toEqual({
        offers: [],
        isOffersLoaded: false,
        fullOfferInformation: {},
        isFullOfferInformationLoaded: false,
        favoriteOffers: [],
        isFavoriteOffersLoaded: false,
      });
  });

  it('should update offers by load offers', () => {
    const state = {
      offers: [],
      isOffersLoaded: false,
      fullOfferInformation: {},
      isFullOfferInformationLoaded: false,
      favoriteOffers: [],
      isFavoriteOffersLoaded: false,
    };

    const loadOffersAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };

    expect(appData(state, loadOffersAction))
      .toEqual({
        offers: offers,
        isOffersLoaded: true,
        fullOfferInformation: {},
        isFullOfferInformationLoaded: false,
        favoriteOffers: [],
        isFavoriteOffersLoaded: false,
      });
  });

  it('should update offers by update offer', () => {
    const state = {
      offers: offers,
      isOffersLoaded: true,
      fullOfferInformation: {},
      isFullOfferInformationLoaded: false,
      favoriteOffers: [],
      isFavoriteOffersLoaded: false,
    };

    const updateOfferAction = {
      type: ActionType.UPDATE_OFFER,
      payload: updatedOffer,
    };

    const updatedOfferId = offers.findIndex((offer) => offer.id === updatedOffer.id);

    expect(appData(state, updateOfferAction))
      .toEqual({
        offers: [
          ...offers.slice(0, updatedOfferId),
          updatedOffer,
          ...offers.slice(updatedOfferId + 1),
        ],
        isOffersLoaded: true,
        fullOfferInformation: {},
        isFullOfferInformationLoaded: false,
        favoriteOffers: [],
        isFavoriteOffersLoaded: false,
      });
  });

  it('should update fullOfferInformation by load fullOfferInformation', () => {
    const state = {
      offers: [],
      isOffersLoaded: false,
      fullOfferInformation: {},
      isFullOfferInformationLoaded: false,
      favoriteOffers: [],
      isFavoriteOffersLoaded: false,
    };

    const detailedOfferData = offers[0];
    const nearbyOffersData = offers;
    const reviewsData = reviews;

    const loadFullOfferInformationAction = {
      type: ActionType.LOAD_FULL_OFFER_INFORMATION,
      payload: {detailedOfferData, nearbyOffersData, reviewsData},
    };

    expect(appData(state, loadFullOfferInformationAction))
      .toEqual({
        offers: [],
        isOffersLoaded: false,
        fullOfferInformation: {
          detailedOffer: detailedOfferData,
          nearbyOffers: nearbyOffersData,
          reviews: reviewsData
        },
        isFullOfferInformationLoaded: true,
        favoriteOffers: [],
        isFavoriteOffersLoaded: false,
      });
  });

  it('should update reviews', () => {
    const state = {
      offers: [],
      isOffersLoaded: false,
      fullOfferInformation: {},
      isFullOfferInformationLoaded: false,
      favoriteOffers: [],
      isFavoriteOffersLoaded: false,
    };

    const loadFullOfferInformationAction = {
      type: ActionType.UPDATE_REVIEWS,
      payload: reviews,
    };

    expect(appData(state, loadFullOfferInformationAction))
      .toEqual({
        offers: [],
        isOffersLoaded: false,
        fullOfferInformation: {reviews},
        isFullOfferInformationLoaded: false,
        favoriteOffers: [],
        isFavoriteOffersLoaded: false,
      });
  });

  it('should update favoriteOffers by load favoriteOffers', () => {
    const state = {
      offers: [],
      isOffersLoaded: false,
      fullOfferInformation: {},
      isFullOfferInformationLoaded: false,
      favoriteOffers: [],
      isFavoriteOffersLoaded: false,
    };

    const loadFullOfferInformationAction = {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: offers,
    };

    expect(appData(state, loadFullOfferInformationAction))
      .toEqual({
        offers: [],
        isOffersLoaded: false,
        fullOfferInformation: {},
        isFullOfferInformationLoaded: false,
        favoriteOffers: offers,
        isFavoriteOffersLoaded: true,
      });
  });
});
