import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPageScreen from '../main-page/main-page';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import RoomScreen from '../room/room';
import SignInScreen from '../sign-in/sign-in';

function App(props) {
  const {cards} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.INDEX}>
          <MainPageScreen
            cards={cards}
          />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesScreen />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <RoomScreen />
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
  cards: PropTypes.array.isRequired,
};

export default App;
