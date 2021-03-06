import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeProduct, setDeletedProduct } from '../../../../actions/cart';

const BasketListing = ({
  quantity,
  product,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="BasketCard--listing text">
      <div className="BasketCard--listing-product">
        <div className="BasketCard--listing-product-resume">
          <img src={product.picture} alt="" />
          <div className="BasketCard--listing-product-resume__detail">
            <h1>{product.name}</h1>
            <p>Format: {!product.unitType ? 'Kg' : 'Unité'}</p>
            <button
              type="button"
              onClick={() => {
                dispatch(setDeletedProduct(product.id));
                dispatch(removeProduct());
              }}
            >
              Suprimer
            </button>
          </div>
        </div>
      </div>
      <div className="BasketCard--listing-price BasketCard-none">
        <h3>{product.price} €/{!product.unitType ? 'Kg' : 'Unité'}</h3>
      </div>
      <div className="BasketCard--listing-quantity">
        <h3>{quantity} {!product.unitType ? 'Kg' : 'Unité'}</h3>
      </div>
      <div className="BasketCard--listing-total">
        <h3>{(product.price * quantity).toFixed(2)} €</h3>
      </div>
    </div>
  );
};

BasketListing.propTypes = {
  quantity: PropTypes.string.isRequired,
  product: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      picture: PropTypes.string.isRequired,
      unitType: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ),
};

BasketListing.defaultProps = {
  product: null,
};

export default BasketListing;
