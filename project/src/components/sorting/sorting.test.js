import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Sorting from './sorting';
import {SortType} from '../../const';

describe('Component: Sorting', () => {
  it('should render correctly', () => {
    render(
      <Sorting activeOption={SortType.POPULAR} onOptionChange={() => {}}/>,
    );

    expect(screen.getByTestId(SortType.POPULAR)).toBeInTheDocument();
    expect(screen.getByTestId(SortType.TO_HIGH_PRICE)).toBeInTheDocument();
    expect(screen.getByTestId(SortType.TO_LOW_PRICE)).toBeInTheDocument();
    expect(screen.getByTestId(SortType.TOP_RATED)).toBeInTheDocument();
  });

  it('should call callback when click on sorting option', () => {
    const optionChangeHandle = jest.fn();

    render(
      <Sorting activeOption={SortType.POPULAR} onOptionChange={optionChangeHandle}/>,
    );

    userEvent.click(screen.getByTestId(SortType.TO_HIGH_PRICE));

    expect(optionChangeHandle).toBeCalledWith(SortType.TO_HIGH_PRICE);
  });
});
