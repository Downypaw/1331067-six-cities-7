import React from 'react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Map from './map';
import {MapType} from '../../const';

const createFakeStore = configureStore({});

let history = null;
let store = null;

const mockCityLocation = {
  latitude: 52.38333,
  longitude: 4.9,
  zoom: 10,
};

const mockPoints = [{
  offerId: 1,
  offerCords: [52.3909553943508, 4.85309666406198],
  zoom: 10,
}];

const mockSelectedPoint = 1;

describe('Component: Map', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    store = createFakeStore({});
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Map type={MapType.OFFER_PAGE} cityLocation={mockCityLocation} points={mockPoints} selectedPoint={mockSelectedPoint} />
        </Router>
      </Provider>
    );

    expect(screen.getByTestId('map')).toBeInTheDocument();
  });
});
