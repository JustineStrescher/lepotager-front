import './login.scss';
import './modal.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from './LoginForm';
import { updateLoginField, logIn } from '../../../actions/user';

const Login = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="login__form">
      {isLogged && (
        <div className="login__form--logged">
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
      {!isLogged && (

      <LoginForm logged={isLogged} />

      )}
    </div>
  );
};

Login.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default Login;
