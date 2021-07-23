import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {ActionType} from './action';
import {updatedOfferFromServer} from './api-actions-mock';
import {checkAuth, login, fetchOffers, logout, toggleFavorite, getFullOfferInformation, postComment, getFavoriteOffers} from './api-actions';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {adaptOfferToClient} from '../util/adapter';

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: 'test@test.ru', password: '123456'};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.INDEX,
        });
      });
  });

  it('should make a correct API call to GET /offers', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffers();

    apiMock
      .onGet(APIRoute.OFFERS)
      .reply(200, []);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [],
        });
      });
  });

  it('should make a correct API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    Storage.prototype.removeItem = jest.fn();

    apiMock
      .onDelete(APIRoute.LOGOUT)
      .reply(204, [{fake: true}]);

    return logoutLoader(dispatch, jest.fn(() => {}), api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(1);
        expect(dispatch).nthCalledWith(1, {
          type: ActionType.LOGOUT,
        });

        expect(Storage.prototype.removeItem).toBeCalledTimes(2);
        expect(Storage.prototype.removeItem).nthCalledWith(1, 'token');
        expect(Storage.prototype.removeItem).nthCalledWith(2, 'login');
      });
  });

  it('should make a correct API call to POST /favorite/:offerId/:status', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 1;
    const status = 0;
    const toggleFavoriteLoader = toggleFavorite({offerId, status});

    apiMock
      .onPost(`${APIRoute.FAVORITE}/${offerId}/${status}`)
      .reply(200, updatedOfferFromServer);

    return toggleFavoriteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_OFFER,
          payload: adaptOfferToClient(updatedOfferFromServer),
        });
      });
  });

  it('should make a correct API call to GET full offer information /offer/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 1;
    const toggleFavoriteLoader = getFullOfferInformation(offerId);

    apiMock
      .onGet(`${APIRoute.OFFERS}/${offerId}`)
      .reply(200, updatedOfferFromServer);

    apiMock
      .onGet(`${APIRoute.OFFERS}/${offerId}/nearby`)
      .reply(200, []);

    apiMock
      .onGet(`${APIRoute.REVIEWS}/${offerId}`)
      .reply(200, []);

    return toggleFavoriteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FULL_OFFER_INFORMATION,
          payload: {
            detailedOfferData: adaptOfferToClient(updatedOfferFromServer),
            nearbyOffersData: [],
            reviewsData: [],
          },
        });
      });
  });

  it('should make a correct API call to update comment', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 1;
    const comment = '';
    const rating = 1;
    const commentLoader = postComment(offerId, {comment, rating});

    apiMock
      .onPost(`${APIRoute.REVIEWS}/${offerId}`)
      .reply(200, []);

    return commentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_REVIEWS,
          payload: [],
        });
      });
  });

  it('should make a correct API call to POST comment', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteOffersLoader = getFavoriteOffers();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, []);

    return favoriteOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_OFFERS,
          payload: [],
        });
      });
  });
});
