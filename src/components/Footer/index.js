import './Footer.scss';

import mail from './Logo/envelope.png';
import fb from './Logo/facebook (2).png';
import tel from './Logo/telephone.png';
import adresse from './Logo/adress.png';

const Footer = () => (
  <section className="container">
    <div className="footer">
      <div className="footer--contact">
        <div className="footer--contact-contact">
          <h2>Nous contacter </h2>
          <ul className="footer--contact-contact__list">
            <li><a href="les-culs-fouettés@gmail.com"><img src={mail} alt="mail" /> les-culs-fouettés@gmail.com</a></li>
            <li><img src={tel} alt="mail" /><a> 06 66 66 66 66</a></li>
            <li><img src={adresse} alt="mail" /> 2 champ du millieu 45000 Trouville</li>
            <li><a aria-label="facebook" href="https://fr-fr.facebook.com/pages/category/Farm/Le-potager-des-culs-fouett%C3%A9s-1543041816026668/"><img src={fb} alt="" /> Le potager des culs fouettés</a></li>
          </ul>
        </div>
        <div className="footer--contact-reseaux">
          <h2>Espace client </h2>
          <div className="footer--contact-reseaux__list">
            <ul>
              <li><a href="">Mon compte</a></li>
              <li><a href="">Mon panier</a></li>
              <li><a href="">Mes commandes</a></li>
            </ul>
          </div>
        </div>
        <div className="footer--contact-reseaux">
          <h2>A propos </h2>
          <div className="footer--contact-reseaux__list">
            <ul>
              <li><a href="https://fr-fr.facebook.com/pages/category/Farm/Le-potager-des-culs-fouett%C3%A9s-1543041816026668/">Qui sommes nous ?</a></li>
              <li><a href="">Concept</a></li>
              <li><a href="">Horaires</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
