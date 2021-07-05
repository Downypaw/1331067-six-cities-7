import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {toggleFavorite} from '../../store/api-actions';
import {AppRoute, AuthorizationStatus} from '../../const';
import offerProp from '../props-validation/offer.prop';

export function CardInformation(props) {
  const {offer, authorizationStatus, onBookmarkClick} = props;
  const {id, price, isFavorite, rating, title, type} = offer;

  const history = useHistory();

  const handleBookmarkClick = () => {
    onBookmarkClick({
      offerId: id,
      status: Number(!isFavorite),
    });
  };

  return (
    <React.Fragment>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button
          className={
            `place-card__bookmark-button
            ${authorizationStatus === AuthorizationStatus.AUTH && isFavorite
              ? 'place-card__bookmark-button--active'
              : ''
            } button`
          }
          onClick={authorizationStatus === AuthorizationStatus.AUTH
            ? handleBookmarkClick
            : () => history.push(AppRoute.SIGN_IN)}
          type="button"
        >
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${Math.round(100 / 5 * rating)}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${id}`}>{title}</Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </React.Fragment>
  );
}

CardInformation.propTypes = {
  offer: offerProp,
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

export default connect(mapStateToProps, mapDispatchToProps)(CardInformation);
