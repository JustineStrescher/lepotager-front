import './modal.scss';
import { useState } from 'react';
import LoginForm from './LoginForm';

const Login = () => {
  const [isLogged, setIsLogged] = useState(true);


  return (
    <div>
      {isLogged && (
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
