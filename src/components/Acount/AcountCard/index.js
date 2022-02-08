/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';
import { setNotAdd, setAdd } from '../../../actions/product';
import { updateAcount, updateLoginField } from '../../../actions/user';

const AcountCard = () => {
  const user = useSelector((state) => state.user);
  const passWord = useSelector((state) => state.user.passWord);
  const notAdd = useSelector((state) => state.cart.notAdd);
  const add = useSelector((state) => state.cart.add);
  const dispatch = useDispatch();
  return (
    <div className="acountCard--content">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (passWord !== '') {
            dispatch(updateAcount());
            dispatch(setAdd(!add));
            window.setTimeout(() => {
              dispatch(setAdd(false));
            }, 4000);
          }
          else {
            dispatch(setNotAdd(!notAdd));
            window.setTimeout(() => {
              dispatch(setNotAdd(false));
            }, 4000);
          }
        }}
        action=""
        className="field-form"
      >
        <div className="field acountCard--content__lastName">
          <label htmlFor="lastName" className="field-label">
            Nom :
          </label>
          <input
            value={user.lastname}
            onChange={(event) => {
              dispatch(updateLoginField(event.target.value, 'lastname'));
            }}
            id="lastName"
            type="text"
            className="field-input"
            placeholder="Nom"
            name="lastName"
          />
        </div>
        <div className="field acountCard--content__name">
          <label htmlFor="name" className="field-label">
            Prénom :
          </label>
          <input
            value={user.firstname}
            onChange={(event) => {
              dispatch(updateLoginField(event.target.value, 'firstname'));
            }}
            id="name"
            type="text"
            className="field-input"
            placeholder="Prénom"
            name="name"
          />
        </div>
        <div className="field acountCard--content__email">
          <label htmlFor="e-mail" className="field-label">
            E-mail :
          </label>
          <input
            value={user.eMail}
            onChange={(event) => {
              dispatch(updateLoginField(event.target.value, 'eMail'));
            }}
            id="e-mail"
            type="e-mail"
            className="field-input"
            placeholder="E-mail"
            name="e-mail"
          />
        </div>
        <div className="field acountCard--content__tel">
          <label htmlFor="tel" className="field-label">
            N° de téléphone :
          </label>
          <input
            value={user.phone}
            onChange={(event) => {
              dispatch(updateLoginField(event.target.value, 'phone'));
            }}
            id="tel"
            type="text"
            className="field-input"
            placeholder="N° de téléphone"
            name="N° de téléphone"
          />
        </div>
        <div className="field acountCard--content__adress">
          <label htmlFor="adresse" className="field-label">
            Adresse :
          </label>
          <input
            value={user.address}
            onChange={(event) => {
              dispatch(updateLoginField(event.target.value, 'address'));
            }}
            id="adresse"
            type="text"
            className="field-input"
            placeholder="Adresse"
            name="Adresse"
          />
        </div>
        <div className="field acountCard--content__town">
          <label htmlFor="ville" className="field-label">
            Ville :
          </label>
          <input
            value={user.city}
            onChange={(event) => {
              dispatch(updateLoginField(event.target.value, 'city'));
            }}
            id="ville"
            type="text"
            className="field-input"
            placeholder="Ville"
            name="Ville"
          />
        </div>
        <div className="field acountCard--content__CP">
          <label htmlFor="CP" className="field-label">
            Code postal :
          </label>
          <input
            value={user.zip}
            onChange={(event) => {
              dispatch(updateLoginField(event.target.value, 'zip'));
            }}
            id="CP"
            type="text"
            className="field-input"
            placeholder="Code Postale"
            name="Code postal"
          />
        </div>
        <div className="field acountCard--content__MP">
          <label htmlFor="MP" className="field-label">
            Mot de passe :
          </label>
          <input
            value={user.passWord}
            onChange={(event) => {
              dispatch(updateLoginField(event.target.value, 'passWord'));
            }}
            id="MP"
            type="password"
            className="field-input"
            placeholder="Mot de passe"
            name="Mot de passe"
          />
        </div>
        <button type="submit" className="acountCard--content__validation">
          Valider les modifications
        </button>
      </form>
      {notAdd && (
        <div>
          <p className="error-message text">le mot de passe est vide ou les informations ne sont pas correct</p>
        </div>
      )}
      {add && (
        <div>
          <p className="validation-message text">Vos modifications ont bien été enregistrées</p>
        </div>
      )}
    </div>
  );
};

export default AcountCard;
