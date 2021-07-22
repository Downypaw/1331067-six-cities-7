import React from 'react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import OffersList from './offers-list';
import {City} from '../../const';

const createFakeStore = configureStore({});

let history = null;
let store = null;

jest.mock('../../components/card-information/card-information', () => {
  const mockCardInformation = () => <>This is mock CardInformation</>;
  return {
    __esModule: true,
    default: mockCardInformation,
  };
});

const mockOffers = [
  {
    bedrooms: 1,
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
      avatarUrl: 'img/avatar-max.jpg',
      id: 2,
      isPro: true,
      name: 'Leon',
    },
    id: 2,
    images: ['img/room.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/apartment-03.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-03.jpg',
    price: 220,
    rating: 2.8,
    title: 'Wood and stone place',
    type: 'studio',
  },
];

describe('Component: OffersList', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    store = createFakeStore({});
  });

  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <Router history={history}>
          <OffersList activeCity={City.PARIS} offers={mockOffers} />
        </Router>
      </Provider>
    );

    expect(screen.getByText(`${mockOffers.length} places to stay in ${City.PARIS}`)).toBeInTheDocument();
  });
});
