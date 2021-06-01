import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main/main';

function App(props) {
  const {cards} = props;

  return (
    <MainPage
      cards={cards}
    />
  );
}

App.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default App;
