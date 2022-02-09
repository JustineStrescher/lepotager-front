import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateLoginField } from '../../../actions/user';

import './modal.scss';

const LoginFormContent = ({ email, password, setIsAddingUser }) => {
  const dispatch = useDispatch();
  const errorConnection = useSelector((state) => state.user.errorConnection);

  return (
    <>
    <>
      <label htmlFor="username">E-mail</label><input
        name="_username"
        type="eMail"
        value={email}
        placeholder="Email"
        id="username"
        onChange={(event) => {
          dispatch(updateLoginField(event.target.value, 'email'));
        }}
      /><label htmlFor="password">Mot de passe</label><input
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
      {errorConnection && (
        <p className="error-message text">L'e-mail ou le mot de passe est invalide</p>
      )}
    </>
      <div className="login__form--subscribe" onClick={() => setIsAddingUser(true)}>
        S'inscrire
      </div>
    </>

  );
};
export default LoginFormContent;
