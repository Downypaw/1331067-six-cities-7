import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {SortType} from '../../const';

function Sorting(props) {
  const [listState, setListState] = useState('');
  const {activeOption, onOptionChange} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={() => setListState(listState ? '' : 'places__options--opened')}>
        {activeOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${listState}`}>
        {Object.values(SortType).map((sortType) => {
          const isActive = sortType === activeOption ? 'places__option--active' : '';
          return (
            <li className={`places__option ${isActive}`} key={sortType} tabIndex="0"
              onClick={() => onOptionChange(sortType)}
            >
              {sortType}
            </li>
          );
        })}
      </ul>
    </form>
  );
}

Sorting.propTypes = {
  activeOption: PropTypes.string.isRequired,
  onOptionChange: PropTypes.func.isRequired,
};

export default React.memo(Sorting, (prevProps, nextProps) => prevProps.activeOption === nextProps.activeOption);
