import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { Squash as Hamburger } from 'hamburger-react';
import { NavLink } from 'react-router-dom';
import logo from './logo.jpg';
import hamburger from './hamburger.svg';
import magnifyingGlass from './magnifying_glass_icon.svg';
import './NavBar.scss';
import SearchBar from './SearchBar';

const Navbar = () => (
  <div>
    <nav className="menu">
      <div>
        <NavLink to="/" className="menu--logo">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/menu">
          <img src={hamburger} alt="burger-menu" className="menu--hamburger" />
        </NavLink>
      </div>
      <div className="menu--title">
        Le potager des culs fouettés
      </div>
      <div className="menu--nav ">
        <NavLink to="/accueil" className="menu--link">
          Accueil
        </NavLink>
        <NavLink to="/nos-produits" className="menu--link">
          Nos produits
        </NavLink>
        <NavLink to="/a-propos" className="menu--link">
          A propos
        </NavLink>
      </div>
      <div>
        <SearchBar />
        <NavLink to="/search" className="menu--icon">
          <img src={magnifyingGlass} alt="search-icon" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/panier" className="menu--button">
          Mon panier
          <div className="menu--icon">
            <FaShoppingCart />
          </div>
        </NavLink>
        <NavLink to="/se-connecter" className="menu--button">
          Se connecter
          <div className="menu--icon">
            <FaUserAlt />
          </div>
        </NavLink>
      </div>
    </nav>
  </div>
);

export default Navbar;
