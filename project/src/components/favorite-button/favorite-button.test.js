import React from 'react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import FavoriteButton from './favorite-button';
import {FavoriteButtonType, AuthorizationStatus, AppRoute} from '../../const.js';

const createFakeStore = configureStore({});

let history = null;
let store = null;
let fakeComponent = null;

const mockData = {
  id: 1,
  isFavorite: true,
  pageType: FavoriteButtonType.CARD,
};

const mockOffer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.38333,
      longitude: 4.9,
      zoom: 10,
    },
    name: 'Amsterdam',
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
  images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg'],
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

describe('Component: FavoriteButton', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly', () => {
    store = createFakeStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoriteButton id={mockData.id} isFavorite={mockData.isFavorite} pageType={mockData.pageType}/>
        </Router>
      </Provider>
    );

    expect(screen.getByText('In bookmarks')).toBeInTheDocument();
  });

  it('when unauthorized user click on button should redirect to Sign In Screen', () => {
    store = createFakeStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoriteButton id={mockData.id} isFavorite={mockData.isFavorite} pageType={mockData.pageType}/>
          <Route exact path={AppRoute.SIGN_IN}><h1>Mock Sign In Screen</h1></Route>
        </Router>
      </Provider>
    );

    userEvent.click(screen.getByRole('button'));

    expect(screen.getByText('Mock Sign In Screen')).toBeInTheDocument();
  });
});
