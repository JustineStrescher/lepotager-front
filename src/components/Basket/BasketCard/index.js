import { useSelector } from 'react-redux';

import BasketListing from './BasketListing';

const BasketCard = () => {
  const BasketProdut = useSelector((state) => state.product.ProductData);

  return (
    <div className="BasketCard">
      <div className="BasketCard--listing">
        <div className="BasketCard--listing-product">
          <h2>Produit</h2>
        </div>
        <div className="BasketCard--listing-price">
          <h2>Prix</h2>
        </div>
        <div className="BasketCard--listing-quantity BasketCard-none">
          <h2>Quantité</h2>
        </div>
        <div className="BasketCard--listing-total BasketCard-none">
          <h2>Total</h2>
        </div>
      </div>
      {BasketProdut.map((product) => (
        <BasketListing key={product.id} {...product} />
      ))}

      <form action="submit" className="BasketCard--form">
        <div className="BasketCard--form-flex">
          <p className="BasketCard--form-flex-ammount">Total :  0 €</p>
          <button
            type="button"
            className="BasketCard--form-flex-button"
          >Passer la commande
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasketCard;