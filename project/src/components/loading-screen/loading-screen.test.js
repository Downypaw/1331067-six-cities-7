import React from 'react';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import LoadingScreen from './loading-screen';

describe('Component: LoadingScreen', () => {
  it('should render correctly', () => {
    const {getByText} = render(
        <LoadingScreen />
    );
    const loadingParagraphElement = getByText('Loading ...');

    expect(loadingParagraphElement).toBeInTheDocument();
  });
});
