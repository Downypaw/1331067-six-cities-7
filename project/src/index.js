import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {composeWithDevTools} from 'redux-devtools-extension';
import reviews from './mocks/reviews';
import {reducer} from './store/reducer';

const store = createStore(
  reducer,
  composeWithDevTools(),
);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
