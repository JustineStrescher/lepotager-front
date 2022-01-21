import './Footer.scss';

import logo from './Logo-cf.jpg';
import mail from './envelope.png';
import fb from './facebook.png';
import insta from './instagram.png';
import twitter from './twitter.png';
import tel from './telephone.png';
import adresse from './adress.png';

const Footer = () => (
  <section className="footer">
    <div className="footer--logo">
      <img src={logo} alt="logo des culs fouettés" />
    </div>
    <div className="footer--contact">
      <div className="footer--contact-contact">
        <h2>Contact :</h2>
        <ul className="footer--contact-contact__list">
          <li><a href="les-culs-fouettés@gmail.com"><img src={mail} alt="mail" /> : les-culs-fouettés@gmail.com</a></li>
          <li><img src={tel} alt="mail" /> : <a>06 66 66 66 66</a></li>
          <li><img src={adresse} alt="mail" /> : 2 champ du millieu 45000 Trouville</li>
        </ul>
      </div>
    </div>
    <div className="footer--contact">
      <div className="footer--contact-reseaux">
        <h2>Réseaux :</h2>
        <div className="footer--contact-reseaux__list">
          <a aria-label="facebook" href="https://fr-fr.facebook.com/pages/category/Farm/Le-potager-des-culs-fouett%C3%A9s-1543041816026668/"><img src={fb} alt="" /></a>
          <a aria-label="instagram" href=""><img src={insta} alt="" /></a>
          <a aria-label="twitter" href=""><img src={twitter} alt="" /></a>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
