import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';

function NotFoundScreen() {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>
      <main className="page__main">
        <div className="container">
          <h1>404. Page not found</h1>
          <Link to="/">Вернуться на главную</Link>
        </div>
      </main>
    </div>
  );
}

export default NotFoundScreen;
