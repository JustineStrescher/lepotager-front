import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
// import { FaUserAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import logo from './logo.jpg';
import { setWho } from '../../actions/product';

const NavBar = () => {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);
  return (
    <section className="container__header">
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="logo" className="navbar__logo" />
        </Link>
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
            <Link to="/" className="navbar__links--home">
              <li>Accueil</li>
            </Link>

            <Link to="/legumes" className="navbar__links--products">
              <li>Categories</li>
            </Link>
            <Link
              to="/a-propos"
              className="navbar__links--about"
              onClick={() => {
                dispatch(setWho());
              }}
            >
              <li>A propos</li>
            </Link>
            <Link to="/se-connecter" className="navbar__links--account">
              <li>Se connecter</li>
            </Link>
          </>
        </ul>
        <button type="submit" className="navbar__search">
          <AiOutlineSearch />
        </button>
      </nav>
    </section>
  );
};

export default NavBar;
