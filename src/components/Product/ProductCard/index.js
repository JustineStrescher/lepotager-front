import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({
  name,
  picture,
  available,
  slug,
  categorySlug,
}) => (

  <div className="ProductCard">
    <div className="ProductCard--button">
      <Link to={`Légume/${categorySlug}/${slug}`}>
        <div className="ProductCard--image">
          <div className="ProductCard--image-effect">
            <img src={picture} alt="" />
          </div>
        </div>
        <div className="ProductCard--button-title">
          <h1 className="ProductCard--button-title-title">{name}
          </h1>
          <p className="ProductCard--button-title-price">15.23 €/kg </p>
        </div>
        <p className={!available ? 'ProductCard--button-available' : 'ProductCard--button-available_none'}>Indisponible</p>
      </Link>
    </div>
  </div>
);

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  categorySlug: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired,
};

export default ProductCard;
