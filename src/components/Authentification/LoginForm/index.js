import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import './loginform.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import LoginFormModal from './LoginFormModal';

const LoginForm = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="login__form">
      {isLogged && (
        <div className="login__form--logged">
          <div className="login__form--logged">
            Mon compte
          </div>
          <button
            type="button"
            className="login_form--button"
            onClick={() => setIsLogged(false)}
          >
            Déconnexion
          </button>
        </div>
      )}
      {!isLogged && (
        <LoginFormModal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          email={emailValue}
          password={passwordValue}
          setEmailValue={setEmailValue}
          setPasswordValue={setPasswordValue}
          handleLogin={() => {
            dispatch(logIn());
          }}
        >
          Se connecter
        </LoginFormModal>
      )}
    </div>
  );
};

LoginForm.propTypes = {
  /** valeur dans le champ "e-mail" */
  email: PropTypes.string.isRequired,
  /** valeur dans le champ "password" */
  password: PropTypes.string.isRequired,
  /** appelé quand un caractère est saisi dans l'un des champs */
  /** appelé quand on soumet le formulaire */
  handleLogin: PropTypes.func.isRequired,
  /** appelé quand on est en mode connecté et qu'on clique sur le bouton "Déconnexion" */
  // handleLogout: PropTypes.func.isRequired,
  /** Choix entre le mode connecté (affichage d'un message) et le mode pas connecté
   * (affichage d'un formulaire)
   */
  isLogged: PropTypes.bool,
  /** Message affiché en mode connecté */
  loggedMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default LoginForm;
