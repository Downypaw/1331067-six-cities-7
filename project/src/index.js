import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const CARD_COUNT = 5;
const cards = [];

for (let i = 0; i < CARD_COUNT; i++) {
  cards.push(`Card${i}`);
}


ReactDOM.render(
  <React.StrictMode>
    <App
      cards={cards}
    />
  </React.StrictMode>,
  document.getElementById('root'));
