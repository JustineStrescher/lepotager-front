import './basket.scss';
import { useDispatch } from 'react-redux';
import Highlight from 'src/components/Highlight';
import BasketCard from './BasketCard';
import ScrollToTop from '../ScrollToTop';
import { useSelector } from 'react-redux';

const Basket = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  return (
    <section className="basket__container">
      <ScrollToTop />
      <div className="Basket--title">
        <p>Mon panier</p>
      </div>
      {isLogged && (
        <div className="BasketCard">
          <BasketCard />
        </div>
      )}
      {!isLogged && (
        <div className="BasketCard">
          <p className="BasketCard--unLogged">Vous devez etre connecté pour consulter votre panier</p>
        </div>
      )}
      <Highlight />
    </section>
  );
};

export default Basket;
