/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import SignUpForm from '../SignUpForm';
import LoginFormModal from './LoginFormModal';
import LoginFormContent from './LoginFormContent';
import './modal.scss';

import { signUp, emptyFields } from '../../../actions/user';

const LoginForm = ({
  email,
  password,
  isLogged,
  handleSignUp,
  handleLogin,
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
  const handleClickOutside = () => {
    setIsAddingUser(false);
    setIsOpenModal(false);
    dispatch(emptyFields());
  };
  useOnClickOutside(ref, handleClickOutside);

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
            <form autoComplete="off" className="search__modal" onSubmit={isAddingUser ? handleSubmitSignUp : handleSubmit}>
              <div className="input__container">
                {isAddingUser
                  ? (
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
                      isAddingUser={isAddingUser}
                      handleSignUp={() => {
                        dispatch(signUp());
                      }}
                    />
                  )
                  : (
                    <LoginFormContent
                      email={email}
                      password={password}
                      setIsAddingUser={setIsAddingUser}
                    />
                  )}
              </div>
            </form>

          </div>
        </div>
      </LoginFormModal>

    </>
  );
};

export default LoginForm;
