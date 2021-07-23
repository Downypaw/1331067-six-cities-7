import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import CitiesList from './cities-list';
import {City} from '../../const.js';

const createFakeStore = configureStore({});

let history = null;
let store = null;

describe('Component: CitiesList', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    store = createFakeStore({});
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CitiesList activeCity={City.PARIS} onCityChange={() => {}}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(City.PARIS)).toBeInTheDocument();
    expect(screen.getByText(City.COLOGNE)).toBeInTheDocument();
    expect(screen.getByText(City.BRUSSELS)).toBeInTheDocument();
    expect(screen.getByText(City.AMSTERDAM)).toBeInTheDocument();
    expect(screen.getByText(City.HAMBURG)).toBeInTheDocument();
    expect(screen.getByText(City.DUSSELDORF)).toBeInTheDocument();
  });

  it('when user click on city should call callback', () => {
    const cityChangeHandle = jest.fn();

    render(
      <Provider store={store}>
        <Router history={history}>
          <CitiesList activeCity={City.PARIS} onCityChange={cityChangeHandle}/>
        </Router>
      </Provider>,
    );

    userEvent.click(screen.getByText(City.COLOGNE));

    expect(cityChangeHandle).toBeCalled();
  });
});
