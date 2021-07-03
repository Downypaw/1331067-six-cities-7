import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRoute} from '../../const';
import MainPageScreen from '../main-page/main-page';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import OfferScreen from '../offer/offer';
import SignInScreen from '../sign-in/sign-in';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../loading-screen/loading-screen';
import offerProp from '../props-validation/offer.prop';
import reviewProp from '../props-validation/review.prop';
import {AuthorizationStatus} from '../../const';
import browserHistory from '../../browser-history';

export function App(props) {
  const {offers, reviews, authorizationStatus, isDataLoaded} = props;

  if (authorizationStatus === AuthorizationStatus.UNKNOWN || !isDataLoaded) {
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
          render={() => <FavoritesScreen offers={offers.filter((offer) => offer.isFavorite)}/>}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.OFFER} render={(routeProps) => {
          const offerId = parseInt(routeProps.match.params.id, 10);
          const currentOffer = offers.find((offer) => offer.id === offerId);
          const otherOffers = offers.filter((offer) => offer.city.name === currentOffer.city.name && offer.id !== currentOffer.id);
          return (
            <OfferScreen
              offer={currentOffer}
              otherOffers={otherOffers}
              reviews={reviews}
            />
          );
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
  offers: PropTypes.arrayOf(offerProp).isRequired,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
});

export default connect(mapStateToProps, null)(App);
