import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus, FavoriteButtonType, FavoriteButtonSize} from '../../const';
import {toggleFavorite} from '../../store/api-actions';

function FavoriteButton(props) {
  const {id, isFavorite, pageType, onBookmarkClick, authorizationStatus} = props;

  const history = useHistory();

  const handleBookmarkClick = () => {
    onBookmarkClick({
      offerId: id,
      status: Number(!isFavorite),
    });
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
  isFavorite: PropTypes.bool.isRequired,
  pageType: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onBookmarkClick(offerId, status) {
    dispatch(toggleFavorite(offerId, status));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
