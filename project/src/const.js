export const AppRoute = {
  SIGN_IN: '/login',
  FAVORITES: '/favorites',
  INDEX: '/',
  OFFER: '/offer/:id',
};

export const City = {
  PARIS: 'Paris',
  COLOGNE: 'Cologne',
  BRUSSELS: 'Brussels',
  AMSTERDAM: 'Amsterdam',
  HAMBURG: 'Hamburg',
  DUSSELDORF: 'Dusseldorf',
};

export const MapType = {
  OFFER_PAGE: 'property',
  MAIN_PAGE: 'cities',
};

export const SortType = {
  POPULAR: 'Popular',
  TO_HIGH_PRICE: 'Price: low to high',
  TO_LOW_PRICE: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};

export const SortProperty = {
  PRICE: 'price',
  RATING: 'rating',
};

export const SortDirection = {
  ASCENDING: 'ascending',
  DESCENDING: 'descending',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  OFFERS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
  FAVORITE: '/favorite',
  REVIEWS: '/comments',
};

export const MAX_IMAGES_COUNT = 6;

export const FavoriteButtonType = {
  CARD: 'place-card',
  OFFER: 'property',
};

export const FavoriteButtonSize = {
  CARD: {
    width: 18,
    height: 19,
  },
  OFFER: {
    width: 31,
    height: 33,
  },
};

export const NameSpace = {
  DATA: 'DATA',
  INTERACTION: 'INTERACTION',
  USER: 'USER',
};
