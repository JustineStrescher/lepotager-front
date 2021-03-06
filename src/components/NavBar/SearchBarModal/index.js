import { createPortal } from 'react-dom';
import './SearchBarModal.scss';
import { AiOutlineClose } from 'react-icons/ai';
import '../NavBar.scss';
import PropTypes from 'prop-types';

const SearchBarModal = ({ open, children, onClose }) => {
  if (!open) return null;
  return createPortal(
    <div className="search__container">
      <div className="search__modal">
        <div onClick={onClose} className="search__icon--close">
          <AiOutlineClose color="black" />
        </div>
        { children }
      </div>
    </div>,
    document.getElementById('portal'),
  );
};

SearchBarModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,

};

export default SearchBarModal;
