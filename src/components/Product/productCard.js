import PropTypes from 'prop-types';

import './Product.scss';

const ProductCard = ({ picture }) => (

  <div className="ProductCard">
    <div className="ProductCard--button">
      <div className="ProductCard--image">
        <div className="ProductCard--image-effect">
          <img src={picture} alt="" />
        </div>
      </div>
      <div className="ProductCard--button-title">
        <h1>Courgette</h1>
        <p className="ProductCard--button-title-price">15.23 € / kg </p>
      </div>
      <button className="ProductCard--button-button" type="button" href="">
        Fiche produit
      </button>
    </div>
  </div>
);

ProductCard.propTypes = {
  picture: PropTypes.string.isRequired,
};

export default ProductCard;
