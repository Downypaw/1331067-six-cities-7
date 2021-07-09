import React from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {nanoid} from 'nanoid';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';
import NearPlaceCard from '../near-place-card/near-place-card';
import Map from '../map/map';
import Header from '../header/header';
import FavoriteButton from '../favorite-button/favorite-button';
import {MapType, MAX_IMAGES_COUNT, AuthorizationStatus, FavoriteButtonType} from '../../const';
import offerProp from '../props-validation/offer.prop';
import reviewProp from '../props-validation/review.prop';

export function Offer(props) {
  const {fullOfferInformation, authorizationStatus} = props;
  const history = useHistory();

  const {detailedOffer, nearbyOffers, reviews} = fullOfferInformation;

  const {id, images, isPremium, title, isFavorite, rating, type, bedrooms, maxAdults, price, goods, host, description} = detailedOffer;

  const imagesForGalleryCount = images.length >= MAX_IMAGES_COUNT
    ? MAX_IMAGES_COUNT
    : images.length;

  const cityLocation = detailedOffer.city.location;
  const points = [detailedOffer, ...nearbyOffers].map((item) => ({
    offerId: item.id,
    offerCords: [item.location.latitude, item.location.longitude],
    zoom: item.location.zoom,
  }));

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(0, imagesForGalleryCount).map((image, index) => (
                <div className="property__image-wrapper" key={nanoid()}>
                  <img className="property__image" src={image} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <FavoriteButton id={id} isFavorite={isFavorite} pageType={FavoriteButtonType.OFFER} />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${Math.round(100 / 5 * rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => (
                    <li key={nanoid()} className="property__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.isPro &&
                  <span className="property__user-status">
                    Pro
                  </span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              {
                authorizationStatus === AuthorizationStatus.AUTH &&
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  <ReviewsList reviews={reviews}/>
                  <ReviewsForm />
                </section>
              }
            </div>
          </div>
          <Map type={MapType.OFFER_PAGE} cityLocation={cityLocation} points={points} selectedPoint={detailedOffer.id}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearbyOffers.map((nearbyOffer) => <NearPlaceCard key={nearbyOffer.id} offer={nearbyOffer}/>)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

Offer.propTypes = {
  fullOfferInformation: PropTypes.shape({
    detailedOffer: offerProp,
    nearbyOffers: PropTypes.arrayOf(offerProp).isRequired,
    reviews: PropTypes.arrayOf(reviewProp).isRequired,
  }).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  fullOfferInformation: state.fullOfferInformation,
  authorizationStatus: state.authorizationStatus,
});

export default connect(mapStateToProps)(Offer);
