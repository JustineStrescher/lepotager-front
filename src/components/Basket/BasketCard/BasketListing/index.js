import PropTypes from 'prop-types';

const BasketListing = ({
  picture,
  name,
  price,
  quantity,
  unit,
}) => (
  <div className="BasketCard--listing">
    <div className="BasketCard--listing-product">
      <div className="BasketCard--listing-product-resume">
        <img src={picture} alt="" />
        <div className="BasketCard--listing-product-resume__detail">
          <h1>{name}</h1>
          <p>Format: {unit}</p>
          <button type="button">Suprimer</button>
        </div>
      </div>
    </div>
    <div className="BasketCard--listing-price">
      <h3>{price} €/{unit}</h3>
    </div>
    <div className="BasketCard--listing-quantity BasketCard-none">
      <h3>{quantity}</h3>
    </div>
    <div className="BasketCard--listing-total BasketCard-none">
      <h3>{price * quantity} €</h3>
    </div>
  </div>
);

BasketListing.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

export default BasketListing;
