export const adaptOfferToClient = (offer) => {
  const adaptedOffer = Object.assign(
    {},
    offer,
    {
      host: Object.assign(
        {},
        offer.host,
        {
          avatarUrl: offer.host.['avatar_url'],
          isPro: offer.host.['is_pro'],
        },
      ),
      isFavorite: offer.['is_favorite'],
      isPremium: offer.['is_premium'],
      maxAdults: offer.['max_adults'],
      previewImage: offer.['preview_image'],
    },
  );

  delete adaptedOffer.host.['avatar_url'];
  delete adaptedOffer.host.['is_pro'];
  delete adaptedOffer.['is_favorite'];
  delete adaptedOffer.['is_premium'];
  delete adaptedOffer.['max_adults'];
  delete adaptedOffer.['preview_image'];

  return adaptedOffer;
};

export const adaptOfferToServer = (offer) => {
  const adaptedOffer = Object.assign(
    {},
    offer,
    {
      host: Object.assign(
        {},
        offer.host,
        {
          'avatar_url': offer.host.avatarUrl,
          'is_pro': offer.host.isPro,
        },
      ),
      'is_favorite': offer.isFavorite,
      'is_premium': offer.isPremium,
      'max_adults': offer.maxAdults,
      'preview_image': offer.previewImage,
    },
  );

  delete adaptedOffer.host.avatarUrl;
  delete adaptedOffer.host.isPro;
  delete adaptedOffer.isFavorite;
  delete adaptedOffer.isPremium;
  delete adaptedOffer.maxAdults;
  delete adaptedOffer.previewImage;

  return adaptedOffer;
};

export const adaptReviewToClient = (review) => {
  const adaptedReview = Object.assign(
    {},
    review,
    {
      user: Object.assign(
        {},
        review.user,
        {
          avatarUrl: review.user.['avatar_url'],
          isPro: review.user.['is_pro'],
        },
      ),
    },
  );

  delete adaptedReview.user.['avatar_url'];
  delete adaptedReview.user.['is_pro'];

  return adaptedReview;
};

export const adaptReviewToServer = (review) => {
  const adaptedReview = Object.assign(
    {},
    review,
    {
      user: Object.assign(
        {},
        review.user,
        {
          'avatar_url': review.user.avatarUrl,
          'is_pro': review.user.isPro,
        },
      ),
    },
  );

  delete adaptedReview.user.avatarUrl;
  delete adaptedReview.user.isPro;

  return adaptedReview;
};
