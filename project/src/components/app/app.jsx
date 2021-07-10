import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRoute} from '../../const';
import MainPageScreen from '../main-page/main-page';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import OfferScreen from '../offer/offer';
import SignInScreen from '../sign-in/sign-in';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../loading-screen/loading-screen';
import {AuthorizationStatus} from '../../const';
import browserHistory from '../../browser-history';
import {getOffers, getLoadedOffersStatus, getLoadedFullInformationStatus, getLoadedFavoriteOffersStatus} from '../../store/app-data/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';

export default function App(props) {
  const {setFullOfferInformation, setFavoriteOffers} = props;
  const offers = useSelector(getOffers);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isOffersLoaded = useSelector(getLoadedOffersStatus);
  const isFullOfferInformationLoaded = useSelector(getLoadedFullInformationStatus);
  const isFavoriteOffersLoaded = useSelector(getLoadedFavoriteOffersStatus);

  if (authorizationStatus === AuthorizationStatus.UNKNOWN || !isOffersLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.INDEX}>
          <MainPageScreen
            offers={offers}
          />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => {
            setFavoriteOffers();
            return isFavoriteOffersLoaded ? <FavoritesScreen /> : <LoadingScreen />;
          }}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.OFFER} render={(routeProps) => {
          const offerId = parseInt(routeProps.match.params.id, 10);
          if (offers.some((offer) => offer.id === offerId)) {
            setFullOfferInformation(offerId);
            return isFullOfferInformationLoaded ? <OfferScreen /> : <LoadingScreen />;
          } else {
            return <NotFoundScreen />;
          }
        }}
        >
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignInScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  setFullOfferInformation: PropTypes.func.isRequired,
  setFavoriteOffers: PropTypes.func.isRequired,
};
