import { NavLink } from 'react-router-dom';

import './about.scss';

const AboutConcept = () => (
  <div className="about">
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
  </div>
);

export default AboutConcept;
