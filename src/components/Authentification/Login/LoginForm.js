/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import SignUpForm from '../SignUpForm';
import LoginFormModal from './LoginFormModal';
import './modal.scss';

import { updateLoginField, signUp } from '../../../actions/user';

const LoginForm = ({
  email,
  password,
  isLogged,
  handleSignUp,
}) => {
  const dispatch = useDispatch();
  const ref = useRef();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isAddingUser, setIsAddingUser] = useState(false);
  const country = useSelector((state) => state.user.country);
  const zip = useSelector((state) => state.user.zip);
  const address = useSelector((state) => state.user.address);
  const phone = useSelector((state) => state.user.phone);
  const firstname = useSelector((state) => state.user.firstname);
  const lastname = useSelector((state) => state.user.lastname);
  const city = useSelector((state) => state.user.city);

  if (isLogged === 1) return null;

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
  const handleSubmitSignUp = (event) => {
    event.preventDefault();
    handleSignUp();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };

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
            <form autoComplete="off" className="search__modal" onSubmit={handleSubmitSignUp}>
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
                <button
                  type="submit"
                  className="login__form--button"
                >
                  Valider
                </button>

              </div>
              <div className="login__form--subscribe" onClick={() => setIsAddingUser(true)}>
                S'inscrire
              </div>
              <SignUpForm
                email={email}
                password={password}
                firstname={firstname}
                lastname={lastname}
                zip={zip}
                address={address}
                city={city}
                phone={phone}
                country={country}
                onSubmit={handleSubmitSignUp}
                isAddingUser={isAddingUser}
                handleSignUp={() => {
                  dispatch(signUp());
                }}
              />
            </form>

          </div>
        </div>
      </LoginFormModal>

    </>
  );
};

export default LoginForm;
