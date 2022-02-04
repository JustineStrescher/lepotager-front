import './footer.scss';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import mail from './Logo/envelope.png';
import fb from './Logo/facebook (2).png';
import tel from './Logo/telephone.png';
import adresse from './Logo/adress.png';
import { setWho } from '../../actions/product';

const Footer = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);

  return (
    <section className="Footer__container">
      <div className="footer">
        <div className="footer--contact">
          <div className="footer--contact-contact">
            <h2>Nous contacter </h2>
            <ul className="footer--contact-contact__list">
              <li><img src={mail} alt="mail" /> contact@lepotagerdesculsfouettes.fr</li>
              <li><img src={tel} alt="mail" /><a> 06 81 22 67 05</a></li>
              <li><img src={adresse} alt="mail" /> Rue du barboux 39350 Ougney</li>
              <li><a aria-label="facebook" href="https://fr-fr.facebook.com/pages/category/Farm/Le-potager-des-culs-fouett%C3%A9s-1543041816026668/"><img src={fb} alt="" /> Le potager des culs fouettés</a></li>
            </ul>
          </div>
          <div className="footer--contact-reseaux">
            <h2>Espace client </h2>
            <div className="footer--contact-reseaux__list">
              <ul>
                <Link to="/"><li>Accueil</li></Link>
                {isLogged && (
                  <>
                    <Link to="/acount"><li>Mon compte</li></Link>
                    <Link to="/panier"><li>Mon panier</li></Link>
                  </>
                )}
                {!isLogged && (
                  <>
                    <p>Se connecter</p>
                  </>
                )}
              </ul>
            </div>
          </div>
          <div className="footer--contact-reseaux">
            <h2>A propos </h2>
            <div className="footer--contact-reseaux__list">
              <ul>
                <Link to="/les-devs"><li>Les developpeurs</li> </Link>
                <Link
                  to="/a-propos"
                  onClick={() => {
                    dispatch(setWho());
                  }}
                >
                  <li>A propos</li>
                </Link>
                <Link to="/mentions-légales"><li>Mentions légales</li></Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
