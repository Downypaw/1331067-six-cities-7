import React from 'react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import CardInformation from './card-information';

const createFakeStore = configureStore({});

let history = null;
let store = null;

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

jest.mock('../../components/favorite-button/favorite-button', () => {
  const mockFavoriteButton = () => <>This is mock FavoriteButton</>;
  return {
    __esModule: true,
    default: mockFavoriteButton,
  };
});

describe('Component: CardInformation', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    store = createFakeStore({});
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CardInformation offer={mockOffer}/>
        </Router>
      </Provider>,
    );

    const titleElement = screen.getByText(`${mockOffer.title}`);

    expect(titleElement).toBeInTheDocument();
  });

  it('when user click on title should redirect to offer page', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CardInformation offer={mockOffer}/>
          <Route exact path={`/offer/${mockOffer.id}`}><h1>Mock Offer Screen</h1></Route>
        </Router>
      </Provider>,
    );

    userEvent.click(screen.getByRole('link'));

    expect(screen.getByText(/Mock Offer Screen/i)).toBeInTheDocument();
  });
});
