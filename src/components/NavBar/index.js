import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
// import { FaUserAlt } from 'react-icons/fa';
import logo from './logo.jpg';
import SearchBar from './SearchBar';
import LoginModal from '../LoginModal';

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="container__header">
      <nav className="navbar">
        <NavLink to="/">
          <img src={logo} alt="logo" className="navbar__logo" />
        </NavLink>
        <div
          className="navbar__mobile--icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <AiOutlineClose /> : <AiOutlineMenu /> }
        </div>
        <ul
          className={isMobile ? 'navbar__links--mobile' : 'navbar__links'}
          onClick={() => setIsMobile(false)}
        >
          <>
            <NavLink to="/" className="navbar__links--home">
              <li>Accueil</li>
            </NavLink>

            <NavLink to="/nos-produits" className="navbar__links--products">
              <li>Nos produits</li>
            </NavLink>
            <NavLink to="/a-propos" className="navbar__links--about">
              <li>A propos</li>
            </NavLink>
            <div className="navbar__links--account" onClick={() => setIsOpen(true)}>
              <li>Se connecter</li>
            </div>
            <LoginModal open={isOpen} onClose={() => setIsOpen(false)} />
          </>
        </ul>
        <button type="submit" className="navbar__search">
          <AiOutlineSearch />
        </button>
        <>
          <SearchBar />
        </>
      </nav>
    </section>
  );
};

export default NavBar;
