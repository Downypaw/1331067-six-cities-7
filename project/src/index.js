import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducer';
import {requireAuthorization} from './store/action';
import {checkAuth, fetchOffers, getFullOfferInformation} from './store/api-actions';
import {AuthorizationStatus} from './const';
import {redirect} from './store/middlewares/redirect';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

store.dispatch(checkAuth());
store.dispatch(fetchOffers());

const setFullOfferInformation = (offerId) => {
  store.dispatch(getFullOfferInformation(offerId));
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        setFullOfferInformation={setFullOfferInformation}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
