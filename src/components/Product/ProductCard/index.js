import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({
  name,
  picture,
  available,
  slug,
  category,
  price,
  unitType,
}) => (

  <div className="ProductCard">
    <div className="ProductCard--button">
      <Link
        to={`/legumes/${category.id}/${slug}`}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <div className="ProductCard--image">
          <div className="ProductCard--image-effect">
            <img src={picture} alt="" />
          </div>
        </div>
        <div className="ProductCard--button-title">
          <h1 className="ProductCard--button-title-title">{name}
          </h1>
          <p className="ProductCard--button-title-price">{price} €/{!unitType ? 'Kg' : 'unité'} </p>
        </div>
        <p className={!available ? 'ProductCard--button-available' : 'ProductCard--button-available_none'}>Indisponible</p>
      </Link>
    </div>
  </div>
);

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  unitType: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  available: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
