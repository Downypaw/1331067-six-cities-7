import React from 'react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Review from './review';

const createFakeStore = configureStore({});

let history = null;
let store = null;

const mockReview = {
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
};

describe('Component: Review', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    store = createFakeStore({});
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Review review={mockReview} />
        </Router>
      </Provider>
    );

    expect(screen.getByText(`${mockReview.comment}`)).toBeInTheDocument();
  });
});
