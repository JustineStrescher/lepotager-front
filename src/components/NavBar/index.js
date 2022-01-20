import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from './logo.jpg';
import './NavBar.scss';

const Navbar = () => (
  <>
    <section className="menu">
      <NavLink to="/">
        <img src={logo} alt="logo" className="menu--logo" />
      </NavLink>
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
        <NavLink to="/panier" className="menu--button">
          Mon panier
          <FaShoppingCart />
        </NavLink>
        <NavLink to="/se-connecter" className="menu--button">
          Se connecter
        </NavLink>
      </div>
    </section>
  </>
);

export default Navbar;
