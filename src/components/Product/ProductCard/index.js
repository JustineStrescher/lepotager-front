import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({
  name,
  picture,
  available,
  slug,
  categorySlug,
  price,
  unit,
}) => (

  <div className="ProductCard">
    <div className="ProductCard--button">
      <Link to={`/legumes/${categorySlug}/${slug}`}>
        <div className="ProductCard--image">
          <div className="ProductCard--image-effect">
            <img src={picture} alt="" />
          </div>
        </div>
        <div className="ProductCard--button-title">
          <h1 className="ProductCard--button-title-title">{name}
          </h1>
          <p className="ProductCard--button-title-price">{price} €/{unit} </p>
        </div>
        <p className={!available ? 'ProductCard--button-available' : 'ProductCard--button-available_none'}>Indisponible</p>
      </Link>
    </div>
  </div>
);

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  categorySlug: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
