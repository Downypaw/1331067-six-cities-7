import React from 'react';
import {useSelector} from 'react-redux';
import {AuthorizationStatus} from '../../const';
import Logo from '../logo/logo';
import UnauthorizedNavigation from '../unauthorized-navigation/unauthorized-navigation';
import AuthorizedNavigation from '../authorized-navigation/authorized-navigation';
import {getAuthorizationStatus} from '../../store/user/selectors';

export default function Header() {

  const authorizationStatus = useSelector(getAuthorizationStatus);

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
