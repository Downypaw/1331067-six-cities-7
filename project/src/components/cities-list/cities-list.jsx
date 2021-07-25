import React from 'react';
import PropTypes from 'prop-types';
import {City} from '../../const';

function CitiesList(props) {
  const {activeCity, onCityChange} = props;

  return(
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(City).map((city) => (
            <li className="locations__item" key={city}>
              <a
                className={`locations__item-link tabs__item ${activeCity === city ? 'tabs__item--active' : ''}`} href="#"
                onClick={() => onCityChange(city)}
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

CitiesList.propTypes = {
  activeCity: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
};

export default React.memo(CitiesList);
