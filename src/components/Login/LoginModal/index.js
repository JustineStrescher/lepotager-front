import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import './loginmodal.scss';

const LoginModal = ({ open, onClose }) => {
  if (!open) return null;
  return createPortal(
    <div className="modal__background">
      <div className="modal__container">
        <form>
          <div className="search__modal">
            <div onClick={onClose} className="search__icon--close">
              <AiOutlineClose />
            </div>
            <div className="modal__body">
              <h2>Connexion</h2>
              <div className="form-group">
                <h3>Email</h3>
                <label htmlFor="email">
                  <input type="text" name="email" id="email" />
                </label>
                <h3>Mot de passe</h3>
                <label htmlFor="password">
                  <input type="text" name="email" id="email" />
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById('portal'),
  );
};
export default LoginModal;
