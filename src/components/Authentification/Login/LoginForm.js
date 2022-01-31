/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import SignUpForm from '../SignUpForm';
import LoginFormModal from './LoginFormModal';
import './modal.scss';

const LoginForm = ({
  email,
  setEmailValue,
  password,
  setPasswordValue,
  logged,
}) => {
  const ref = useRef();
  const [isOpenModal, setIsOpenModal] = useState(false);

  if (logged) return null;
  const handleSubmit = (e) => {
    e.preventDefault();
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
    <><div onClick={() => setIsOpenModal(true)}> Se connecter</div>

      <LoginFormModal openModal={isOpenModal} onClose={() => setIsOpenModal(false)} logged={logged}>
        <div className="modal__container">
          <div ref={ref}>
            <form autoComplete="off" className="search__modal" onSubmit={(e) => handleSubmit(e)}>
              <input
                name="email"
                type="text"
                value={email}
                placeholder="Email"
                onChange={(event) => {
                  const newValue = event.target.value;
                  setEmailValue(newValue);
                }}
              />
              <input
                name="password"
                type="password"
                placeholder="Mot de passe"
                onChange={(event) => {
                  const newValue = event.target.value;
                  setPasswordValue(newValue);
                }}
                value={password}
              />
              <button
                type="submit"
                className="login__form--button"
              >
                Valider
              </button>
              <div onClick={() => setIsOpenModal(true)}>
                <div>
                  Créer un compte
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
