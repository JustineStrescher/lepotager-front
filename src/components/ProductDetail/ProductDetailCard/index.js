import PropTypes from 'prop-types';

import { findVegetableInCart } from 'src/selectors/vegetables';

import { useSelector, useDispatch } from 'react-redux';

import { changeInputValue, setAdd, setNotAdd } from 'src/actions/product';
import { addProduct, setAlreadyIn } from 'src/actions/cart';

const ProductDetailCard = ({
  picture,
  name,
  price,
  description,
  available,
  unitType,
  id,
}) => {
  // quantity of current product
  const quantity = useSelector((state) => state.cart.quantity);

  // Gestion des message d'erreur
  const add = useSelector((state) => state.cart.add);
  const notAdd = useSelector((state) => state.cart.notAdd);
  const alreadyIn = useSelector((state) => state.cart.alreadyIn);

  // look if the current product is already in the cartList;
  const cartList = useSelector((state) => state.cart.cartList);
  const recipe = findVegetableInCart(cartList, id);

  // Utilisateur connecté
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
            {!isLogged && (<p className="unLogged text">Veuillez vous connecter pour ajouter un produit au panier.</p>)}
            {isLogged && (
              <button
                type="submit"
                className={!available ? 'ProductDetailCard--form-button none' : 'ProductDetailCard--form-button'}
                onClick={() => {
                  if (quantity > 0) {
                    if (recipe === true) {
                      dispatch(addProduct());
                      dispatch(setAdd(!add));
                      dispatch(setAlreadyIn(false));
                      dispatch(setNotAdd(false));
                      window.setTimeout(() => {
                        dispatch(setAdd(false));
                      }, 2500);
                    }
                    else {
                      dispatch(setAlreadyIn(!notAdd));
                      dispatch(setAdd(false));
                      dispatch(setNotAdd(false));
                      window.setTimeout(() => {
                        dispatch(setAlreadyIn(false));
                      }, 2500);
                    }
                  }
                  else {
                    dispatch(setNotAdd(!notAdd));
                    dispatch(setAdd(false));
                    dispatch(setAlreadyIn(false));
                    window.setTimeout(() => {
                      dispatch(setNotAdd(false));
                    }, 2500);
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
              Echec : La quantité n'est pas suffisante.
            </p>
            <p
              className={!alreadyIn ? 'ProductDetailCard--form-notAdd-none text ' : 'ProductDetailCard--form-notAdd text'}
            >
              Echec : Le produit existe déjà dans le panier.
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
