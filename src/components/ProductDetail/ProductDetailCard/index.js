import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';

import { changeInputValue } from 'src/actions/productDetail';

const ProductDetailCard = ({
  picture,
  name,
  price,
  description,
  available,
  unitType,
}) => {
  const quantity = useSelector((state) => state.product.quantity);
  const dispatch = useDispatch();

  return (
    <div className="ProductDetailCard">
      <div className="ProductDetailCard--image">
        <img src={picture} alt="" />
      </div>
      <div className="ProductDetailCard--detail">
        <h1 className="ProductDetailCard--detail-title">{name}</h1>
        <p className="ProductDetailCard--detail-description">{description}</p>
        <p className="ProductDetailCard--detail-price">Prix / {!unitType ? 'Kg' : 'unité'} : {price} €</p>
        <div className="ProductDetailCard--form">
          <form action="submit">
            <div className="ProductDetailCard--form-flex">
              <input
                type="number"
                className="ProductDetailCard--form-input"
                placeholder="Quantité"
                value={!unitType ? Math.round(quantity) : quantity}
                pattern={!unitType ? ' 0+\\.[0-9]*[1-9][0-9]*$' : ''}
                onChange={(event) => {
                  // on dispatch une action en envoyant la nouvelle valeur
                  dispatch(changeInputValue(event.target.value));
                }}
              />
              <p className="ProductDetailCard--form-ammount">Total : {price * quantity} €</p>
            </div>
            {available && (
              <button
                type="button"
                className={!available ? 'ProductDetailCard--form-button none' : 'ProductDetailCard--form-button'}
              >
                Ajouter au panier
              </button>
            )}
            <p className={!available ? 'ProductDetailCard--detail-available' : 'ProductDetailCard--detail-available_none'}>Produit non disponible</p>
          </form>
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
  unitType: PropTypes.string.isRequired,
};

export default ProductDetailCard;
