/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import SignUpForm from '../SignUpForm';
import LoginFormModal from './LoginFormModal';
import './modal.scss';

import { updateLoginField, logIn } from '../../../actions/user';
import { AiFillMail, AiFillLock } from 'react-icons/ai';

const LoginForm = ({
  email,
  password,
  isLogged,
  handleLogin,
}) => {
  const dispatch = useDispatch();
  const ref = useRef();
  const [isOpenModal, setIsOpenModal] = useState(false);

  if (isLogged === 1) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };
  // eslint-disable-next-line no-shadow
  function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return () => {
          document.removeEventListener('mousedown', listener);
          document.removeEventListener('touchstart', listener);
        };
      },
      [ref, handler],
    );
  }
  useOnClickOutside(ref, () => setIsOpenModal(false));

  return (
    <>
      <div
        className="navbar--connect"
        onClick={() => setIsOpenModal(true)}
      >Se connecter
      </div>
      <LoginFormModal
        openModal={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        isLogged={isLogged}
      >
        <div className="modal__container">
          <div ref={ref}>
            <form autoComplete="off" className="search__modal" onSubmit={handleSubmit}>
              <div className="input__container">
                <label htmlFor="username">E-mail</label>
                <input
                  name="_username"
                  type="eMail"
                  value={email}
                  placeholder="Email"
                  id="username"
                  onChange={(event) => {
                    dispatch(updateLoginField(event.target.value, 'email'));
                  }}
                />
                {/* <AiFillMail className="modal__icon" /> */}
                <label htmlFor="password">Mot de passe</label>
                <input
                  name="_password"
                  id="password"
                  type="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(event) => {
                    dispatch(updateLoginField(event.target.value, 'password'));
                  }}
                />
                {/* <AiFillLock className="modal__icon--password" /> */}
                <button
                  type="submit"
                  className="login__form--button"
                >
                  Valider
                </button>
                <div className="login__form--subscribe">
                  <Link to="/">
                    S'inscrire
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </LoginFormModal>

    </>
  );
};

export default LoginForm;
