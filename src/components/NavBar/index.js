import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import { FaUserAlt } from 'react-icons/fa';

import { useDispatch } from 'react-redux';

import SearchBar from './SearchBar';

import Login from '../Authentification/Login/Login';

import logo from './logo.jpg';
import { setWho } from '../../actions/product';

const NavBar = () => {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <section className="container__header">
        <nav className="navbar">
          <NavLink to="/">
            <img src={logo} alt="logo" className="navbar__logo" />
          </NavLink>
          <div
            className="navbar__mobile--icon"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? <AiOutlineClose /> : <AiOutlineMenu />}
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
              <NavLink
                to="/a-propos"
                className="navbar__links--about"
                onClick={() => {
                  dispatch(setWho());
                }}
              >
                <li>A propos</li>
              </NavLink>
              <Login />
            </>
          </ul>
          <SearchBar />
        </nav>
      </section>
    </>

  );
};

export default NavBar;
