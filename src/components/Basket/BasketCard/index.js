import { setNotAdd } from 'src/actions/product';

import { useDispatch, useSelector } from 'react-redux';

import { sendCart } from '../../../actions/cart';

import BasketListing from './BasketListing';

const BasketCard = () => {
  const dispatch = useDispatch();
  const BasketProduct = useSelector((state) => state.cart.cartList);
  const notAdd = useSelector((state) => state.cart.notAdd);
  const add = useSelector((state) => state.cart.add);

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
      {(BasketProduct.length === 0) && (
        <div className="empty--basket text">le panier est vide.. rendez vous sur les fiches produits pour le remplir.</div>
      )}
      {BasketProduct.map((product) => (
        <BasketListing key={product.id} {...product} />
      ))}
      <p className="BasketCard--listing-disclaimer text">Les prix mentionnés sont uniquement a titre indicatif et peuvent varier au retrait de la commande</p>
      <form action="submit" className="BasketCard--form">
        <div className="BasketCard--form-flex">
          <p className="BasketCard--form-flex-ammount">Total :  0 €</p>
          <button
            type="button"
            className="BasketCard--form-flex-button"
            onClick={() => {
              if (BasketProduct.length > 0) {
                dispatch(sendCart());
              }
              dispatch(setNotAdd(!notAdd));
              window.setTimeout(() => {
                dispatch(setNotAdd(false));
              }, 5000);
            }}
          >
            Passer la commande
          </button>
        </div>
      </form>
      {notAdd && (
        <div className="empty-basket-notAdd text">Votre panier est vide, vous devez ajouter des produits.</div>
      )}
      {add && (
        <div className="empty-basket-add text">Votre panier nous a été transmis avec succés. </div>
      )}
    </div>
  );
};

export default BasketCard;
