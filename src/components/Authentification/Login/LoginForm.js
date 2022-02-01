/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import SignUpForm from '../SignUpForm';
import LoginFormModal from './LoginFormModal';
import './modal.scss';
import { useDispatch } from 'react-redux';
import { updateLoginField, logIn } from '../../../actions/user';
import { AiFillMail, AiFillLock } from 'react-icons/ai';

const LoginForm = ({
  email,
  password,
  logged,
  handleLogin,
}) => {
  const dispatch = useDispatch();
  const ref = useRef();
  const [isOpenModal, setIsOpenModal] = useState(false);

  if (logged) return null;

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
    <><div onClick={() => setIsOpenModal(true)}> Se connecter</div>

      <LoginFormModal openModal={isOpenModal} onClose={() => setIsOpenModal(false)} logged={logged}>
        <div className="modal__container">
          <div ref={ref}>
            <form autoComplete="off" className="search__modal" onSubmit={handleSubmit}>
              <div className="input__container">
                <input
                  name="_username"
                  type="text"
                  value={email}
                  placeholder="Email"
                  id="username"
                  onChange={(event) => {
                    dispatch(updateLoginField(event.target.value, 'email'));
                  }}
                />
                <AiFillMail className="modal__icon" />
              </div>
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
              <AiFillLock className="modal__icon--password" />
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
