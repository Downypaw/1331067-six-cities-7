import React from 'react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Header from './header';
import {AuthorizationStatus} from '../../const';

const createFakeStore = configureStore({});

let history = null;
let store = null;
let fakeComponent = null;

describe('Component: FavoriteScreen', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly when status is authorized', () => {
    store = createFakeStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>
    );

    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });

  it('should render correctly when status is unauthorized', () => {
    store = createFakeStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>
    );

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
