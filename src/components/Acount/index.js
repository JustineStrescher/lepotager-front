import './acount.scss';

import { useSelector } from 'react-redux';

import Carousel from 'src/components/Carousel';
import AcountCard from './AcountCard';
import ScrollToTop from '../ScrollToTop';

const Acount = () => {
  const isLogged = useSelector((state) => state.user.isLogged);

  return (
    <section className="acount__container">
      <ScrollToTop />
      <div className="titlePage">
        <p>Mon Compte</p>
      </div>
      <div className="acountCard">
        {isLogged && <AcountCard />}
        {!isLogged && <div className="acountCard--content"><h3>Vous n'etes pas connecté</h3></div>}
      </div>
      <Carousel />
    </section>
  );
};

export default Acount;
