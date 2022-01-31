/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import SignUpForm from '../SignUpForm';
import LoginFormModal from './LoginFormModal';
import './modal.scss';
import { useDispatch } from 'react-redux';
import { updateLoginField, logIn } from '../../../actions/user';

const LoginForm = ({
  email,
  password,
  logged,
  onChange,
  handleLogin,
}) => {
  const dispatch = useDispatch();
  const ref = useRef();
  const [isOpenModal, setIsOpenModal] = useState(false);

  if (logged) return null;
  const handleSubmit = (e) => {
    e.preventDefault();
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
                  dispatch(updateLoginField(event.target.value, 'email'));
                }}
              />
              <input
                name="password"
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(event) => {
                  dispatch(updateLoginField(event.target.value, 'password'));
                }}
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
