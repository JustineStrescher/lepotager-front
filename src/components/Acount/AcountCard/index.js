/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';
import { updateAcountField } from '../../../actions/user';

const AcountCard = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div className="acountCard--content">
      <form action="" className="field-form">
        <div className="field acountCard--content__lastName">
          <label htmlFor="lastName" className="field-label">
            Nom :
          </label>
          <input
            value={user.lastName}
            onChange={(event) => {
              dispatch(updateAcountField(event.target.value, 'lastName'));
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
            value={user.name}
            onChange={(event) => {
              dispatch(updateAcountField(event.target.value, 'name'));
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
              dispatch(updateAcountField(event.target.value, 'eMail'));
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
            value={user.tel}
            onChange={(event) => {
              dispatch(updateAcountField(event.target.value, 'tel'));
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
            value={user.adress}
            onChange={(event) => {
              dispatch(updateAcountField(event.target.value, 'adress'));
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
            value={user.town}
            onChange={(event) => {
              dispatch(updateAcountField(event.target.value, 'town'));
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
            value={user.CP}
            onChange={(event) => {
              dispatch(updateAcountField(event.target.value, 'CP'));
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
            value={user.MP}
            onChange={(event) => {
              dispatch(updateAcountField(event.target.value, 'MP'));
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
    </div>
  );
};

export default AcountCard;
