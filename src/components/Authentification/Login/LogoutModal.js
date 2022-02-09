import { createPortal } from 'react-dom';
import './modal.scss';

const LogoutModal = ({ isOpenLogoutModal, children, onClose, }) => {
  if (!isOpenLogoutModal) return null;
  return createPortal(
    <div className="modal__container">
      <div className="search__modal">
        { children }
      </div>
    </div>,
    document.getElementById('portal'),

  );
};

export default LogoutModal;
