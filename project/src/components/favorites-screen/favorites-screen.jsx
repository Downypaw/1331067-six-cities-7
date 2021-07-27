import React from 'react';
import {useSelector} from 'react-redux';
import {getFavoriteOffers} from '../../store/app-data/selectors';
import Header from '../header/header';
import EmptyFavoritesList from '../empty-favorites-list/empty-favorites-list';
import FavoritesList from '../favorites-list/favorites-list';

export default function FavoritesScreen() {
  const favoriteOffers = useSelector(getFavoriteOffers);

  return (
    <div className="page">
      <Header />
      {favoriteOffers.length !== 0 ? <FavoritesList /> : <EmptyFavoritesList />}
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}
