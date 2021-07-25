import React from 'react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {AppRoute} from '../../const';
import PrivateRoute from './private-route';

let history;

describe('Component: PrivateRouter', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push('/private');
  });

  it('should render component for Sign In page, when user not authorized', () => {
    render(
      <Router history={history}>
        <Route exact path="/login"><h1>Sign In Page</h1></Route>
        <PrivateRoute
          exact
          path="/private"
          render={() => (<h1>Private Route</h1>)}
          authorizationFlag={false}
          redirectPath={AppRoute.SIGN_IN}
        />
      </Router>,
    );

    expect(screen.getByText(/Sign In Page/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private Route/i)).not.toBeInTheDocument();
  });

  it('should render component for private route - Favorites Screen, when user authorized', () => {
    render(
      <Router history={history}>
        <Route exact path="/login"><h1>Public Route</h1></Route>
        <PrivateRoute
          exact
          path="/private"
          render={() => (<h1>Private Route</h1>)}
          authorizationFlag
          redirectPath={AppRoute.SIGN_IN}
        />
      </Router>,
    );

    expect(screen.getByText(/Private Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Public Route/i)).not.toBeInTheDocument();
  });

  it('should render component for Sign In Page, when user not authorized', () => {
    render(
      <Router history={history}>
        <Route exact path="/"><h1>Main Page</h1></Route>
        <PrivateRoute
          exact
          path="/private"
          render={() => (<h1>Private Route</h1>)}
          authorizationFlag={false}
          redirectPath={AppRoute.INDEX}
        />
      </Router>,
    );

    expect(screen.getByText(/Main Page/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private Route/i)).not.toBeInTheDocument();
  });

  it('should render component for private route - Main Page, when user authorized', () => {
    render(
      <Router history={history}>
        <Route exact path="/"><h1>Main Page</h1></Route>
        <PrivateRoute
          exact
          path="/private"
          render={() => (<h1>Private Route</h1>)}
          authorizationFlag
          redirectPath={AppRoute.SIGN_IN}
        />
      </Router>,
    );

    expect(screen.getByText(/Private Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Main Page/i)).not.toBeInTheDocument();
  });
});
