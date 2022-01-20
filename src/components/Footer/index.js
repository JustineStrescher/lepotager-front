import './Footer.scss';

import logo from './Logo-cf.jpg';

const Footer = () => (
  <section className="footer">
    <div className="footer--logo">
      <img src={logo} alt="logo des culs fouettés" />
    </div>
    <div className="footer--contact">
      <div className="footer--contact-contact">
        <h2>Contact :</h2>
        <ul className="footer--contact-contact__list">
          <li>Mail: <a href="les-culs-fouettés@gmail.com">les-culs-fouettés@gmail.com</a></li>
          <li>Téléphone : <a>06 66 66 66 66</a></li>
          <li>Adresse : 2 champ du millieu 45000 Trouville</li>
        </ul>
      </div>
    </div>
    <div className="footer--contact">
      <div className="footer--contact-reseaux">
        <h2>Réseaux :</h2>
        <ul className="footer--contact-reseaux__list">
          <li><a href="https://fr-fr.facebook.com/pages/category/Farm/Le-potager-des-culs-fouett%C3%A9s-1543041816026668/">FaceBook</a></li>
          <li><a href="">Twitter</a></li>
          <li><a href="">instagram</a></li>
        </ul>
      </div>
    </div>
  </section>
);

export default Footer;
