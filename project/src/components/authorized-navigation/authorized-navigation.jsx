import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useHistory, Link} from 'react-router-dom';
import {ActionCreator} from '../../store/action';
import {logout} from '../../store/api-actions';
import {AppRoute} from '../../const';

export function AuthorizedNavigation(props) {
  const {onLogoutButtonClick} = props;

  const history = useHistory();

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
              evt.preventDefault();
              onLogoutButtonClick();
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

AuthorizedNavigation.propTypes = {
  onLogoutButtonClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onLogoutButtonClick() {
    dispatch(logout());
  },
});

export default connect(null, mapDispatchToProps)(AuthorizedNavigation);
