import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

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
