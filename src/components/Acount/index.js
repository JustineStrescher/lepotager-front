import './acount.scss';
import Highlight from 'src/components/Highlight';
import AcountCard from './AcountCard';
import ScrollToTop from '../ScrollToTop';

const Acount = () => (

  <section className="acount__container">
    <ScrollToTop />
    <div className="Acount--title">
      <p>Mon Compte</p>
    </div>
    <div className="AcountCard">
      <AcountCard />
    </div>
    <Highlight />
  </section>

);

export default Acount;
