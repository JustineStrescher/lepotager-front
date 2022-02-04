import { useDispatch, useSelector } from 'react-redux';
import { sendCart } from '../../../actions/cart';

import BasketListing from './BasketListing';

const BasketCard = () => {
  const dispatch = useDispatch();
  const BasketProduct = useSelector((state) => state.cart.cartList);

  return (
    <div className="BasketCard">
      <div className="BasketCard--listing">
        <div className="BasketCard--listing-product">
          <h2>Produit</h2>
        </div>
        <div className="BasketCard--listing-price BasketCard-none">
          <h2>Prix</h2>
        </div>
        <div className="BasketCard--listing-quantity">
          <h2>Quantité</h2>
        </div>
        <div className="BasketCard--listing-total">
          <h2>Total</h2>
        </div>
      </div>
      {BasketProduct.map((product) => (
        <BasketListing key={product.id} {...product} />
      ))}
      <form action="submit" className="BasketCard--form">
        <div className="BasketCard--form-flex">
          <p className="BasketCard--form-flex-ammount">Total :  0 €</p>
          <button
            type="button"
            className="BasketCard--form-flex-button"
            onClick={() => {
              dispatch(sendCart());
            }}
          >
            Passer la commande
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasketCard;
