import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {AuthorizationStatus} from '../../const';
import Logo from '../logo/logo';
import UnauthorizedNavigation from '../unauthorized-navigation/unauthorized-navigation';
import AuthorizedNavigation from '../authorized-navigation/authorized-navigation';

export function Header({authorizationStatus}) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <nav className="header__nav">
            {
              authorizationStatus === AuthorizationStatus.AUTH
                ? <AuthorizedNavigation />
                : <UnauthorizedNavigation />
            }
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export default connect(mapStateToProps)(Header);
