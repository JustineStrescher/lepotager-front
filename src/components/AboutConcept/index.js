import { NavLink } from 'react-router-dom';
// import { useParams } from 'react-router';

import Carousel from 'src/components/Carousel';
import About from './About';
import Concept from './Concept';

import './aboutConcept.scss';
import ScrollToTop from '../ScrollToTop';

const AboutConcept = () => (
  // const parameters = useParams();
  // const currentSlug = parameters.slug;
  <section className="About__container">
    <ScrollToTop />
    
    <div className="about">
      <div className="about--container">
        <nav className="about--menu">
          <NavLink
            className={({ isActive }) => (
              isActive ? 'about--menu__link about--menu__link--selected' : 'about--menu__link'
            )}
            to="/a-propos"
          >
            Qui somme nous ?
          </NavLink>
          <NavLink
            className={({ isActive }) => (
              isActive ? 'about--menu__link about--menu__link--selected' : 'about--menu__link'
            )}
            to="/concept"
          >
            Concept
          </NavLink>
        </nav>
        <About />
        <Concept />
        <Carousel />
      </div>
    </div>
  </section>
);

export default AboutConcept;
