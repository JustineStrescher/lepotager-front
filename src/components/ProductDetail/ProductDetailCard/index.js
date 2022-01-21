import PropTypes from 'prop-types';

const ProductDetailCard = ({
  picture,
  title,
  price,
  description,
  available,
  unit,
}) => (

  <div className="ProductDetailCard">
    <div className="ProductDetailCard--image">
      <img src={picture} alt="" />
    </div>
    <div className="ProductDetailCard--detail">
      <p className={!available ? 'ProductDetailCard--detail-available_none' : 'ProductDetailCard--detail-available'}>Produit non disponible</p>
      <h1 className="ProductDetailCard--detail-title">{title}</h1>
      <p className="ProductDetailCard--detail-description">{description}</p>
      <p className="ProductDetailCard--detail-price">Prix / {unit} : {price} €</p>
      <div className="ProductDetailCard--form">
        <form action="" className>
          <input type="number" className="ProductDetailCard--form-input" placeholder="Saisir la quantité" min="1" />
          <p className="ProductDetailCard--form-ammount">Montant : {price} €</p>
          <button
            type="button"
            className={!available ? 'ProductDetailCard--form-button' : 'ProductDetailCard--form-button none'}
            href={!available ? '' : 'https://github.com/O-clock-Xandar'}
          >
            Ajouter au panier
          </button>
        </form>
      </div>
    </div>
  </div>
);

ProductDetailCard.propTypes = {
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired,
  unit: PropTypes.string.isRequired,
};

export default ProductDetailCard;
