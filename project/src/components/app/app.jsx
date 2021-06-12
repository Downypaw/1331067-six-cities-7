import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPageScreen from '../main-page/main-page';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import OfferScreen from '../offer/offer';
import SignInScreen from '../sign-in/sign-in';
import offerProp from '../props-validation/offer.prop';
import reviewProp from '../props-validation/review.prop';

function App(props) {
  const {offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.INDEX}>
          <MainPageScreen
            offers={offers}
          />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesScreen
            offers={offers.filter((offer) => offer.isFavorite)}
          />
        </Route>
        <Route exact path={AppRoute.OFFER} render={(routeProps) => {
          const offerId = parseInt(routeProps.match.params.id, 10);
          const currentOffer = offers.find((offer) => offer.id === offerId);
          const otherOffers = offers.filter((offer) => offer.city.name === currentOffer.city.name && offer.id !== currentOffer.id);
          return (
            <OfferScreen
              offer={currentOffer}
              otherOffers={otherOffers}
              reviews={reviews[0]}
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
  reviews: PropTypes.arrayOf(PropTypes.arrayOf(reviewProp).isRequired).isRequired,
};

export default App;
