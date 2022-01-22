import PropTypes from 'prop-types';

const ProductCard = ({ picture, available }) => (

  <div className="ProductCard">
    <div className="ProductCard--button">
      <div className="ProductCard--image">
        <div className="ProductCard--image-effect">
          <img src={picture} alt="" />
        </div>
      </div>
      <div className="ProductCard--button-title">
        <h1 className="ProductCard--button-title-title">Choux de bruxelle
        </h1>
        <p className="ProductCard--button-title-price">15.23 €/kg </p>
        <button className="ProductCard--button-button" type="button" href="">
          Fiche produit
        </button>
      </div>
      <p className={!available ? 'ProductCard--button-available_none' : 'ProductCard--button-available'}>Indisponible</p>
    </div>
  </div>
);

ProductCard.propTypes = {
  picture: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired,
};

export default ProductCard;
