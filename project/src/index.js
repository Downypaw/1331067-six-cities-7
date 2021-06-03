import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const CARD_COUNT = 5;
const cards = new Array(CARD_COUNT).fill('').map((_, id) => `Card${id}`);


ReactDOM.render(
  <React.StrictMode>
    <App
      cards={cards}
    />
  </React.StrictMode>,
  document.getElementById('root'));
