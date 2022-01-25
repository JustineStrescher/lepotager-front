import { NavLink } from 'react-router-dom';
// import { useParams } from 'react-router';

import Carousel from 'src/components/Carousel';
import About from './About';
import Concept from './Concept';

import './aboutConcept.scss';

const AboutConcept = () => (
  // const parameters = useParams();
  // const currentSlug = parameters.slug;
  <section className="About__container">
    <Carousel />
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
      </div>
    </div>
  </section>
);

export default AboutConcept;
