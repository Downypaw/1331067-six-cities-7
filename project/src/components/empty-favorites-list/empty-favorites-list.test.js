import React from 'react';
import {render} from '@testing-library/react';
import EmptyFavoritesList from './empty-favorites-list';

describe('Component: EmptyFavoritesList', () => {
  it('should render correctly', () => {
    const {getByText} = render(
      <EmptyFavoritesList />,
    );
    const statusElement = getByText('Nothing yet saved.');
    const descriptionElement = getByText('Save properties to narrow down search or plan your future trips.');

    expect(statusElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
