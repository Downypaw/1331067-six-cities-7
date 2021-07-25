import React from 'react';
import {render, screen} from '@testing-library/react';
import FavoritesList from './favorites-list';

jest.mock('../../components/card-information/card-information', () => {
  const mockCardInformation = () => <>This is mock CardInformation</>;
  return {
    __esModule: true,
    default: mockCardInformation,
  };
});

jest.mock('../../components/header/header', () => {
  const mockHeader = () => <>This is mock Header</>;
  return {
    __esModule: true,
    default: mockHeader,
  };
});

const mockFavoriteOffers = [
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
];

describe('Component: FavoriteScreen', () => {
  it('should render correctly', () => {
    render(
      <FavoritesList favoriteOffers={mockFavoriteOffers}/>,
    );

    expect(screen.getByText('Saved listing')).toBeInTheDocument();
  });
});
