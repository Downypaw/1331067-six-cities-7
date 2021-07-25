import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

export default function PrivateRoute({render, path, exact, redirectPath, authorizationFlag}) {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        authorizationFlag
          ? render(routeProps)
          : <Redirect to={redirectPath} />
      )}
    />
  );
}

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  redirectPath: PropTypes.string.isRequired,
  authorizationFlag: PropTypes.bool.isRequired,
};
