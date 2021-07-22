import React from 'react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Card from './card';
import {logout} from '../../store/api-actions';
import {AuthorizationStatus} from '../../const.js';

let history = null;
let store = null;
let fakeComponent = null;

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

describe('Component: Card', () => {
  beforeAll(() => {
    window.localStorage.__proto__.getItem = jest.fn();

    history = createMemoryHistory();

    const createFakeStore = configureStore({});

    store = createFakeStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });

    fakeComponent = (
      <Provider store={store}>
        <Router history={history}>
          <Card offer={mockOffer} onOfferHover={jest.fn()}/>
        </Router>
      </Provider>
    );
  });

  it('should render correctly', () => {
    render(fakeComponent);

    expect(screen.getByAltText(/Place image/i)).toBeInTheDocument();
  });

  it('when user hover on offer should call callback', () => {
    const offerHoverHandle = jest.fn();
    render(
      <Provider store={store}>
        <Router history={history}>
          <Card offer={mockOffer} onOfferHover={offerHoverHandle}/>
        </Router>
      </Provider>
    );

    userEvent.hover(screen.getByRole('article'));

    expect(offerHoverHandle).toBeCalled();
  });
});
