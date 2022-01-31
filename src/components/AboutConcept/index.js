import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Carousel from 'src/components/Carousel';
import About from './About';
import Concept from './Concept';
import ScrollToTop from '../ScrollToTop';

import './aboutConcept.scss';

import { setConcept, setWho } from '../../actions/product';

const AboutConcept = () => {
  const dispatch = useDispatch();
  const who = useSelector((state) => state.product.who);

  return (
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
              onClick={() => {
                dispatch(setWho());
              }}
            >
              Qui sommes-nous ?
            </NavLink>
            <NavLink
              className={({ isActive }) => (
                isActive ? 'about--menu__link about--menu__link--selected' : 'about--menu__link'
              )}
              to="/concept"
              onClick={() => {
                dispatch(setConcept());
              }}
            >
              Concept
            </NavLink>
          </nav>
          {who && <About />}
          {!who && <Concept />}
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default AboutConcept;
