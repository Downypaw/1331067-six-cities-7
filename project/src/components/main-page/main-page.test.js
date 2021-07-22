import React from 'react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import MainPage from './main-page';
import {City} from '../../const';

const createFakeStore = configureStore({});

let history = null;
let store = null;
let fakeComponent = null;

jest.mock('../../components/header/header', () => {
  const mockHeader = () => <>This is mock Header</>;
  return {
    __esModule: true,
    default: mockHeader,
  };
});

jest.mock('../../components/card-information/card-information', () => {
  const mockCardInformation = () => <>This is mock CardInformation</>;
  return {
    __esModule: true,
    default: mockCardInformation,
  };
});

const mockOffers = [
  {
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
  },
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

describe('Component: MainPageScreen', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    store = createFakeStore({
      INTERACTION: {activeCity: City.PARIS},
    });
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <MainPage offers={mockOffers} />
        </Router>
      </Provider>
    );

    expect(screen.getByText(City.PARIS).parentNode).toHaveClass('tabs__item--active');
    expect(screen.getByRole('main')).toHaveClass('page__main--index');
  });
});
