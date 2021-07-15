import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import SignInScreen from './sign-in';

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
});
