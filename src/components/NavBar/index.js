import { Link } from 'react-router-dom';
import logo from './logo.jpg';
import './NavBar.scss';

const NavBar = () => (
  <div className="menu">
    <div className="menu--logo">
      <img src={logo} alt="logo des culs fouettés" className="menu--logo" />
    </div>
    <div>
      <li>
        <Link to="/" className="menu-link">Accueil</Link>
      </li>
      <li>
        <Link to="/nos-produits" className="menu-link">Nos produits</Link>
      </li>
      <li>
        <Link to="/a-propos" className="menu-link">A propos</Link>
      </li>
      <li>
        <Link to="/mon-compte" className="menu-link">Mon compte</Link>
      </li>
    </div>
    <input type="text" placeholder="Search.." className="menu--searchbar" />
    <div className="menu--user">
      <li>
        <Link to="/connexion" className="menu-link">Se connecter</Link>
      </li>
      <li>
        <Link to="/panier" className="menu-link">Mon panier</Link>
      </li>
    </div>
  </div>
);
export default NavBar;
