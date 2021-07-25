import React, {useState} from 'react';
import Logo from '../logo/logo';
import {login} from '../../store/api-actions';
import {useDispatch} from 'react-redux';

export default function SignIn() {
  const [loginValue, setLogin] = useState('');
  const [passwordValue, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(login({
      login: loginValue,
      password: passwordValue,
    }));
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" onSubmit={handleSubmit} method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  onChange={(evt) => setLogin(evt.target.value)}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""
                  data-testid="login"
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  onChange={(evt) => setPassword(evt.target.value)}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required=""
                  data-testid="password"
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                disabled={!loginValue || !passwordValue || !passwordValue.replace(/ /gi, '').length}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
