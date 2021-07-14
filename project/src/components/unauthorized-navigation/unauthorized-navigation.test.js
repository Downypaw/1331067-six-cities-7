import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import UnauthorizedNavigation from './unauthorized-navigation';

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
});
