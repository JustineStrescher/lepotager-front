import './modal.scss';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import LoginForm from './LoginForm';
import { logIn, logOut, signUp } from '../../../actions/user';

import { setWho } from '../../../actions/product';
import LogoutModal from './LogoutModal';
import { resetCart } from '../../../actions/cart';

const Login = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const isLogged = useSelector((state) => state.user.isLogged);
  const [isOpenLogoutModal, setIsOpenLogoutModal] = useState(false);
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  const handleLogout = (evt) => {
    evt.preventDefault();
    dispatch(resetCart());
    setIsOpenLogoutModal(false);
    dispatch(logOut());
  };
  return (
    <>
      {isLogged && (
      <div className="login__form">
        <NavLink
          to="/acount"
          onClick={() => dispatch(setWho(true))}
        >
          <div className="login__form--logged">
            Mon compte
          </div>
        </NavLink>
        <div className="navbar--connect" onClick={() => setIsOpenLogoutModal(true)}>
          Déconnexion
        </div>
        <LogoutModal
          isOpenLogoutModal={isOpenLogoutModal}
        >
          <p>
            La déconnexion entraînera la suppression de votre panier, s'il existe.
            Voulez-vous continuer ?
          </p>
          <button type="submit" onClick={handleLogout}>Valider</button>
          <button type="submit" onClick={() => setIsOpenLogoutModal(false)}>Annuler</button>
        </LogoutModal>
      </div>
      )}
      {!isLogged && (

      <LoginForm
        isLogged={isLogged}
        email={email}
        password={password}
        handleLogin={() => {
          dispatch(logIn());
        }}
        onSubmit={handleSubmit}
        handleSignUp={() => {
          dispatch(signUp());
        }}
      />

      )}
    </>
  );
};

Login.defaultProps = {
  loggedMessage: 'Connecté',
};

export default Login;
