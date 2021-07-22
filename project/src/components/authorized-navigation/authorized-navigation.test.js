import React from 'react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import AuthorizedNavigation from './authorized-navigation';
import {AppRoute} from '../../const.js';

let history = null;
let store = null;
let fakeComponent = null;

describe('Component: AuthorizedNavigation', () => {
  beforeAll(() => {
    window.localStorage.__proto__.getItem = jest.fn();

    history = createMemoryHistory();

    const createFakeStore = configureStore({});

    store = createFakeStore({});

    fakeComponent = (
      <Provider store={store}>
        <Router history={history}>
          <AuthorizedNavigation />
        </Router>
      </Provider>
    );
  });

  it('should render correctly', () => {
    render(fakeComponent);

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });

  it('should render login', () => {
    render(fakeComponent);

    expect(localStorage.getItem).toHaveBeenCalledWith('login');
  });
});
