import './basket.scss';
import { useDispatch } from 'react-redux';
import Highlight from 'src/components/Highlight';
import BasketCard from './BasketCard';

const Basket = () => {
  const dispatch = useDispatch();
  return (
    <section className="basket__container">
      <div className="Basket--title">
        <p>Mon panier</p>
      </div>
      <div className="BasketCard">
        <BasketCard />
      </div>
      <Highlight />
    </section>
  );
};

export default Basket;
