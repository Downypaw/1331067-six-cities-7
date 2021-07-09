import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {AuthorizationStatus, FavoriteButtonType, FavoriteButtonSize, AppRoute} from '../../const';
import {toggleFavorite} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user/selectors';

export default function FavoriteButton(props) {
  const {id, isFavorite, pageType} = props;

  const history = useHistory();

  const authorizationStatus = useSelector(getAuthorizationStatus);

  const dispatch = useDispatch();

  const handleBookmarkClick = () => {
    dispatch(toggleFavorite({
      offerId: id,
      status: Number(!isFavorite),
    }));
  };

  let favoriteButtonSize;

  switch(pageType) {
    case FavoriteButtonType.CARD:
      favoriteButtonSize = FavoriteButtonSize.CARD;
      break;
    case FavoriteButtonType.OFFER:
      favoriteButtonSize = FavoriteButtonSize.OFFER;
      break;
  }

  return(
    <button
      className={`${pageType}__bookmark-button
        ${authorizationStatus === AuthorizationStatus.AUTH && isFavorite ? `${pageType}__bookmark-button--active` : ''}
      button`}
      onClick={authorizationStatus === AuthorizationStatus.AUTH
        ? handleBookmarkClick
        : () => history.push(AppRoute.SIGN_IN)}
      type="button"
    >
      <svg className={`${pageType}__bookmark-icon`} width={`${favoriteButtonSize.width}`} height={`${favoriteButtonSize.height}`}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
}

FavoriteButton.propTypes = {
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  pageType: PropTypes.string.isRequired,
};
