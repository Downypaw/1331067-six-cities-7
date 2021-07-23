import React from 'react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import * as Redux from 'react-redux';
import FavoriteButton from './favorite-button';
import {FavoriteButtonType, AuthorizationStatus, AppRoute} from '../../const.js';

const createFakeStore = configureStore({});

let history = null;
let store = null;

const mockData = {
  id: 1,
  isFavorite: true,
  pageType: FavoriteButtonType.CARD,
};

describe('Component: FavoriteButton', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly', () => {
    store = createFakeStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoriteButton id={mockData.id} isFavorite={mockData.isFavorite} pageType={mockData.pageType}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('In bookmarks')).toBeInTheDocument();
  });

  it('when unauthorized user click on button should redirect to Sign In Screen', () => {
    store = createFakeStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoriteButton id={mockData.id} isFavorite={mockData.isFavorite} pageType={mockData.pageType}/>
          <Route exact path={AppRoute.SIGN_IN}><h1>Mock Sign In Screen</h1></Route>
        </Router>
      </Provider>,
    );

    userEvent.click(screen.getByRole('button'));

    expect(screen.getByText('Mock Sign In Screen')).toBeInTheDocument();
  });

  it('when authorized user click on button should make button active', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    store = createFakeStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoriteButton id={mockData.id} isFavorite={mockData.isFavorite} pageType={mockData.pageType}/>
          <Route exact path={AppRoute.SIGN_IN}><h1>Mock Sign In Screen</h1></Route>
        </Router>
      </Provider>,
    );

    userEvent.click(screen.getByRole('button'));

    expect(useDispatch).toBeCalledTimes(1);
  });
});
