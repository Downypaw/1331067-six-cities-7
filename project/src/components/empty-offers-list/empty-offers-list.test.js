import React from 'react';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import EmptyOffersList from './empty-offers-list';

describe('Component: EmptyOffersList', () => {
  it('should render correctly', () => {
    const {getByText} = render(
        <EmptyOffersList />
    );
    const statusElement = getByText('No places to stay available');
    const descriptionElement = getByText('We could not find any property available at the moment in Dusseldorf');

    expect(statusElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
