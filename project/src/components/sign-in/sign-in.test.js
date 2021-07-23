import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import * as Redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import SignInScreen from './sign-in';
import {AppRoute} from '../../const.js';

const mockStore = configureStore({});

describe('Component: SignInScreen', () => {
  it('should render "SignInScreen" when user navigate to "login" url', () => {
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <SignInScreen />
        </Router>
      </Provider>,
    );

    userEvent.type(screen.getByTestId('login'), 'test@gmail.com');
    userEvent.type(screen.getByTestId('password'), '123456');

    expect(screen.getByDisplayValue(/test@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });

  it('when user click on "Sign in" button should call callback', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <SignInScreen />
          <Route exact path={AppRoute.INDEX}><h1>Mock Main Page</h1></Route>
        </Router>
      </Provider>,
    );

    userEvent.click(screen.getByRole('button', {type: 'submit'}));

    expect(useDispatch).toBeCalledTimes(1);
  });
});
