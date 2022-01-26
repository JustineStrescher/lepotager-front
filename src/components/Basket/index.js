import './basket.scss';
import Highlight from 'src/components/Highlight';
import BasketCard from './BasketCard';

const Basket = () => (
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

export default Basket;
