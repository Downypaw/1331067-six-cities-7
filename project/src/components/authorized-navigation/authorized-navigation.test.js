import React from 'react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import * as Redux from 'react-redux';
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

  it('should redirect to root page when user click on button', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <Router history={history}>
          <AuthorizedNavigation />
          <Route exact path={AppRoute.INDEX}><h1>Mock Main Page</h1></Route>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
    userEvent.click(screen.getByText('Sign out'));
    expect(screen.getByText(/Mock Main Page/i)).toBeInTheDocument();

    expect(useDispatch).toBeCalledTimes(1);
  });
});
