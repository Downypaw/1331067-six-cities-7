import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import ReviewsList from './reviews-list';

const createFakeStore = configureStore({});

let history = null;
let store = null;

const mockReviews = [{
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: '2019-05-08T14:13:56.569Z',
  id: 1,
  rating: 1,
  user: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: 1,
    isPro: false,
    name: 'Angelina',
  },
}];

describe('Component: ReviewsList', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    store = createFakeStore({});
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewsList reviews={mockReviews} />
        </Router>
      </Provider>,
    );

    expect(screen.getByRole('list')).toHaveClass('reviews__list');
  });
});
