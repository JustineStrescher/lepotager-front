import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';

import { changeInputValue, setAdd, setNotAdd } from 'src/actions/product';
import { addProduct } from 'src/actions/cart';

const ProductDetailCard = ({
  picture,
  name,
  price,
  description,
  available,
  unitType,
}) => {
  const quantity = useSelector((state) => state.cart.quantity);
  const add = useSelector((state) => state.cart.add);
  const notAdd = useSelector((state) => state.cart.notAdd);
  const isLogged = useSelector((state) => state.user.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="ProductDetailCard">
      <div className="ProductDetailCard--image">
        <img src={picture} alt="" />
      </div>
      <div className="ProductDetailCard--detail">
        <h1 className="ProductDetailCard--detail-title">{name}</h1>
        <p className="ProductDetailCard--detail-description text">{description}</p>
        <p className="ProductDetailCard--detail-price">Prix / {!unitType ? 'Kg' : 'unité'} : {price} €</p>
        <div className="ProductDetailCard--form">
          {available && (
          <form
            action="submit"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <div className="ProductDetailCard--form-flex">
              <input
                type="number"
                className="ProductDetailCard--form-input"
                placeholder="Quantité"
                min="0"
                value={unitType ? Math.round(quantity) : quantity}
                pattern={unitType ? ' 0+\\.[0-9]*[1-9][0-9]*$' : ''}
                onChange={(event) => {
                  // on dispatch une action en envoyant la nouvelle valeur
                  dispatch(changeInputValue(event.target.value));
                }}
              />
              <p className="ProductDetailCard--form-ammount">Total : {(price * quantity).toFixed(2)} €</p>
            </div>
            {!isLogged && (<p className="unLogged text">Vous ne pouvez pas ajouter de produit au panier non connecté.</p>)}
            {isLogged && (
              <button
                type="submit"
                className={!available ? 'ProductDetailCard--form-button none' : 'ProductDetailCard--form-button'}
                onClick={() => {
                  if (quantity > 0) {
                    dispatch(addProduct());
                    dispatch(setAdd(!add));
                    window.setTimeout(() => {
                      dispatch(setAdd(false));
                    }, 5000);
                  }
                  else {
                    dispatch(setNotAdd(!notAdd));
                    window.setTimeout(() => {
                      dispatch(setNotAdd(false));
                    }, 5000);
                  }
                }}
              >
                Ajouter au panier
              </button>
            )}
            <p
              className={!add ? 'ProductDetailCard--form-add-none text ' : 'ProductDetailCard--form-add text'}
            >
              Votre produit a bien été ajouté au panier.
            </p>
            <p
              className={!notAdd ? 'ProductDetailCard--form-notAdd-none text ' : 'ProductDetailCard--form-notAdd text'}
            >
              La quantité n'est pas suffisante.
            </p>
          </form>
          )}
          {!available && (
            <p className="ProductDetailCard--detail-available">Produit non disponible</p>
          )}
        </div>
      </div>
    </div>
  );
};

ProductDetailCard.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  available: PropTypes.number.isRequired,
  unitType: PropTypes.number.isRequired,
};

export default ProductDetailCard;
