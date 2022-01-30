import './modal.scss';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

const LoginFormModal = ({
  openModal,
  children,
  onClose,
  logged,
}) => {
  if (!openModal || logged) return null;
  return createPortal(
    <div className="modal__container">
      <div className="search__modal">
        <div onClick={onClose} className="search__icon--close">
          <AiOutlineClose />
        </div>
        { children }
      </div>
    </div>,
    document.getElementById('portal'),
  );
};

export default LoginFormModal;
