import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import { FaUserAlt } from 'react-icons/fa';


import SearchBar from './SearchBar';

import Login from '../Authentification/Login/Login';

import { useDispatch } from 'react-redux';

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
              <NavLink to="/a-propos" className="navbar__links--about">
                <li>A propos</li>
              </NavLink>
              <Login />
            </>
          </ul>


          <SearchBar />
        </nav>
      </section>
    </>

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
