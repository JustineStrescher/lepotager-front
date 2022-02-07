import { useDispatch } from 'react-redux';
import { updateLoginField } from '../../../actions/user';
import '../Login/modal.scss';

const SignUpForm = ({
  signUp,
  email,
  password,
  zip,
  address,
  phone,
  country,
  city,
  firstname,
  lastname,
  isAddingUser,
  handleSignUp,

}) => {
  const dispatch = useDispatch();
  const handleSubmitSignUp = (event) => {
    event.preventDefault();
    handleSignUp();
  };
  if (!isAddingUser) return null;
  console.log(isAddingUser);
  return (
    <>
    <div className="input__container-overflow">
      <label htmlFor="email"> Email </label>
      <input
        name="email"
        type="text"
        value={email}
        placeholder="Email"
        onChange={(event) => {
          dispatch(updateLoginField(event.target.value, 'email'));
        }}
      />
      <label htmlFor="password">Mot de passe </label>
      <input
        name="password"
        type="password"
        placeholder="Mot de passe"
        onChange={(event) => {
          dispatch(updateLoginField(event.target.value, 'password'));
        }}
        value={password}
      />
      <label htmlFor="firstname">Prénom</label>
      <input
        name="firstname"
        type="text"
        value={firstname}
        placeholder="Prénom"
        onChange={(event) => {
          dispatch(updateLoginField(event.target.value, 'firstname'));
        }}
      />
      <label htmlFor="lastname">Nom</label>
      <input
        name="lastname"
        type="text"
        value={lastname}
        placeholder="Nom de famille"
        onChange={(event) => {
          dispatch(updateLoginField(event.target.value, 'lastname'));
        }}
      />
      <label htmlFor="address">Adresse</label>
      <input
        name="address"
        type="text"
        value={address}
        placeholder="Adresse"
        onChange={(event) => {
          dispatch(updateLoginField(event.target.value, 'address'));
        }}
      />
      <label htmlFor="zip">Code postal</label>
      <input
        name="zip"
        type="text"
        value={zip}
        placeholder="Code postal"
        onChange={(event) => {
          dispatch(updateLoginField(event.target.value, 'zip'));
        }}
      />
      <label htmlFor="phone">Numéro de téléphone</label>
      <input
        name="phone"
        type="text"
        value={phone}
        placeholder="Numéro de téléphone"
        onChange={(event) => {
          dispatch(updateLoginField(event.target.value, 'phone'));
        }}
      />
      <label htmlFor="city">Ville </label>
      <input
        name="city"
        type="text"
        value={city}
        placeholder="Ville"
        onChange={(event) => {
          dispatch(updateLoginField(event.target.value, 'city'));
        }}
      />
      <label htmlFor="country">Pays</label>
      <input
        name="country"
        type="text"
        value={country}
        placeholder="Pays"
        onChange={(event) => {
          dispatch(updateLoginField(event.target.value, 'country'));
        }}
      />
      <button
        type="submit"
        className="login__form--button signUp"
      >
        Valider
      </button>
    </div>
    </>
  );
};

export default SignUpForm;
