import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Route} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history';
import UnauthorizedNavigation from './unauthorized-navigation';
import {AppRoute} from '../../const';

describe('Component: UnauthorizedNavigation', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <UnauthorizedNavigation />
      </Router>,
    );
    const linkElement = getByText('Sign in');

    expect(linkElement).toBeInTheDocument();
  });

  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <UnauthorizedNavigation />
        <Route exact path={AppRoute.SIGN_IN}>Mock Sign In Screen</Route>
      </Router>,
    );

    userEvent.click(screen.getByText('Sign in'));

    expect(screen.getByText('Mock Sign In Screen')).toBeInTheDocument();
  });
});
