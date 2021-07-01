import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

export function AuthorizedNavigation(props) {
  const {onLogoutButtonClick} = props;

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <a className="header__nav-link header__nav-link--profile" href="#">
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{localStorage.getItem('login')}</span>
        </a>
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
    dispatch(ActionCreator.logout());
  },
});

export default connect(null, mapDispatchToProps)(AuthorizedNavigation);
