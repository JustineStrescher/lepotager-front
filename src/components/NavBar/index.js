import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { Squash as Hamburger } from 'hamburger-react';
import { NavLink } from 'react-router-dom';
import logo from './logo.jpg';
import './NavBar.scss';
import SearchBar from './SearchBar';

const Navbar = () => (
  <>
    <nav className="menu">
      <NavLink to="/">
        <img src={logo} alt="logo" className="menu--logo" />
      </NavLink>
      <Hamburger className="menu--hamburger" color="#F3EFE1" />
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
        <SearchBar className="menu--searchbar" />
      </div>
      <div>
        <NavLink to="/panier" className="menu--button">
          Mon panier
          <FaShoppingCart />
        </NavLink>
        <NavLink to="/se-connecter" className="menu--button">
          Se connecter
          <FaUserAlt />
        </NavLink>
      </div>
    </nav>
  </>
);

export default Navbar;
