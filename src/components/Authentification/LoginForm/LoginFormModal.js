import { useState } from 'react';
import SignUpForm from '../SignUpForm';

const LoginFormModal = ({
  open,
  onClose,
  isLogged,
  handleLogin,
  handleLogout,
  email,
  setEmailValue,
  password,
  setPasswordValue,
}) => {
  if (!open) return null;
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
      <input
        name="email"
        type="text"
        value={email}
        placeholder="Email"
        onChange={(event) => {
          const newValue = event.target.value;
          setEmailValue(newValue);
        }}
      />
      <input
        name="password"
        type="password"
        placeholder="Mot de passe"
        onChange={(event) => {
          const newValue = event.target.value;
          setPasswordValue(newValue);
        }}
        value={password}
      />
      <button
        type="submit"
        className="login-form-button"
      >
        Valider
      </button>
      <div onClick={() => setIsOpenModal(true)}>
        <SignUpForm>
          Créer un compte
        </SignUpForm>
      </div>
    </form>
  );
};

export default LoginFormModal;
