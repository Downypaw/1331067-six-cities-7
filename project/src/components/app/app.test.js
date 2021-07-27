import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus, AppRoute, City, SortType} from '../../const';
import App from './app';

let history = null;
let store = null;
let fakeApp = null;

describe('Application Routing', () => {
  const mockOffer = {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/room.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  };

  const mockStore = {
    USER: {authorizationStatus: AuthorizationStatus.AUTH},
    DATA: {
      offers: [mockOffer],
      isOffersLoaded: true,
      fullOfferInformation: {
        detailedOffer: mockOffer,
        nearbyOffers: [],
        reviews: [],
      },
      isFullOfferInformationLoaded: true,
      favoriteOffers: [mockOffer],
      isFavoriteOffersLoaded: true,
    },
    INTERACTION: {activeCity: City.PARIS, activeSortOption: SortType.POPULAR},
  };

  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});

    store = createFakeStore(mockStore);

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App
            setFullOfferInformation={() => {}}
            setFavoriteOffers={() => {}}
          />
        </Router>
      </Provider>
    );
  });

  it('should render "MainPageScreen" when user navigate to "/"', () => {
    history.push(AppRoute.INDEX);
    render(fakeApp);

    expect(screen.getByText(/1 places to stay in Paris/i)).toBeInTheDocument();
  });

  it('should render "SignInScreen" when user navigate to "/login"', () => {
    mockStore.USER.authorizationStatus = AuthorizationStatus.NO_AUTH;

    history.push(AppRoute.SIGN_IN);
    render(fakeApp);

    expect(screen.getByRole('heading', {name: /Sign in/i})).toBeInTheDocument();
  });

  it('should render "FavoritesScreen" when user navigate to "/favorites"', () => {
    mockStore.USER.authorizationStatus = AuthorizationStatus.AUTH;

    history.push(AppRoute.FAVORITES);
    render(fakeApp);

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });

  it('should render "OfferScreen" when user navigate to "/offer/:id"', () => {
    history.push(`/offer/${1}`);
    render(fakeApp);

    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
  });
});
