import React from 'react';

function NotFoundScreen() {
  return (
    <div class="page">
      <header class="header">
        <div class="container">
          <div class="header__wrapper">
            <div class="header__left">
              <a class="header__logo-link header__logo-link--active">
                <img class="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41">
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>

    <main className="page__main">
      <h1>404. Page not found</h1>
      <a href="/">Вернуться на главную</a>
    </main>
  );
}

export default NotFoundScreen;
