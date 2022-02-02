import './modal.scss';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './LoginForm';
import { logIn, logOut } from '../../../actions/user';
import { Link } from 'react-router-dom';
import { setWho } from '../../../actions/product';

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
    <>
      {isLogged && (
      <div className="login__form">
        <Link
          to="/acount"
          onClick={() => dispatch(setWho(true))}
        >
          <div className="login__form--logged">
            Mon compte
          </div>
        </Link>
        <button
          type="button"
          className="log__button"
          onClick={() => dispatch(logOut())}
        >
          Déconnexion
        </button>
      </div>
      )}
      {isLogged === '' && (

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
    </>
  );
};

Login.defaultProps = {
  loggedMessage: 'Connecté',
};

export default Login;
