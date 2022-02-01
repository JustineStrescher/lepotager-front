import './modal.scss';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './LoginForm';
import { updateLoginField, logIn } from '../../../actions/user';

const Login = ({ handleLogin }) => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const isLogged = useSelector((state) => state.user.isLogged);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  return (
    <div>
      {isLogged === 1 && (
      <div className="login__form">
        <span className="login__form--logged">
          Mon compte
        </span>
        <button
          type="button"
          className="log__button"
          onClick={() => setIsLogged(false)}
        >
          Déconnexion
        </button>
      </div>
      )}
      {isLogged === 0 && (

      <LoginForm
        isLogged={isLogged}
        email={email}
        password={password}
        handleLogin={() => {
          dispatch(logIn());
        }}
        onSubmit={handleSubmit}
      />

      )}
    </div>
  );
};

Login.defaultProps = {
  loggedMessage: 'Connecté',
};

export default Login;
