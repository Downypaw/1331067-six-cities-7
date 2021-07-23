import React from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../../store/api-actions';
import {AppRoute} from '../../const';

export default function AuthorizedNavigation() {
  const dispatch = useDispatch();

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link to={AppRoute.FAVORITES} className="header__nav-link header__nav-link--profile" href="#">
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">
            {localStorage.getItem('login')}
          </span>
        </Link>
      </li>
      <li className="header__nav-item">
        <a className="header__nav-link" href="#">
          <span
            className="header__signout"
            onClick={(evt) => {
              dispatch(logout());
              evt.preventDefault();
            }}
            to='/'
          >
            Sign out
          </span>
        </a>
      </li>
    </ul>
  );
}
