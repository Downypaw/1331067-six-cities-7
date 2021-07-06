import {ActionCreator} from './action';
import {AuthorizationStatus, AppRoute, APIRoute} from '../const';
import {adaptOfferToClient, adaptReviewToClient} from '../util/adapter';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data.map((offer) => adaptOfferToClient(offer)))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('login', data.email);
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.INDEX)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);

export const toggleFavorite = ({offerId, status}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${offerId}/${status}`)
    .then(({data}) => dispatch(ActionCreator.updateOffer(adaptOfferToClient(data))))
);

export const getFullOfferInformation = (offerId) => (dispatch, _getState, api) => (
  Promise.all([
    api.get(`${APIRoute.OFFERS}/${offerId}`),
    api.get(`${APIRoute.OFFERS}/${offerId}/nearby`),
    api.get(`${APIRoute.REVIEWS}/${offerId}`),
  ])
    .then((data) => {
      const [detailedOfferData, nearbyOffersData, reviewsData] = data;
      dispatch(ActionCreator.loadDetailedData(
        adaptOfferToClient(detailedOfferData.data),
        nearbyOffersData.data.map((offer) => adaptOfferToClient(offer)),
        reviewsData.data.map((review) => adaptReviewToClient(review)),
      ));
    })
);

export const postComment = (offerId, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${offerId}`, {comment, rating})
    .then(({data}) => {
      dispatch(ActionCreator.updateReviews(data.map((review) => adaptReviewToClient(review))));
    })
);
