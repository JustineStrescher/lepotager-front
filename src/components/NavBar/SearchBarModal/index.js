import { createPortal } from 'react-dom';
import './SearchBarModal.scss';
import { AiOutlineClose } from 'react-icons/ai';
import '../NavBar.scss';
import { useEffect, useState } from 'react';

const SearchBarModal = ({ open, children, onClose }) => {
  if (!open) return null;
  return createPortal(
    <div className="search__container">
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

export default SearchBarModal;
