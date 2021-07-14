import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import {NameSpace} from '../../const';
import ReviewsForm from './reviews-form';

const mockStore = configureStore({});

describe('Component: ReviewsForm', () => {
  it('should render "ReviewsForm"', () => {
    const history = createMemoryHistory();
    const offerId = 1;
    history.push(`/hotels/:${offerId}`);

    render(
      <Provider
        store={mockStore({
          [NameSpace.DATA]: {
            fullOfferInformation: {
              detailedOffer: {
                id: 1,
              },
            },
          },
        })}
      >
        <Router history={history}>
          <ReviewsForm />
        </Router>
      </Provider>,
    );

    userEvent.type(screen.getByTestId('comment'), 'comment');

    expect(screen.getByDisplayValue(/comment/i)).toBeInTheDocument();
  });
});
