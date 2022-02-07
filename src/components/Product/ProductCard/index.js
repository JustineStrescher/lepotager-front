import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveProduct } from 'src/actions/product';

const ProductCard = ({
  name,
  picture,
  available,
  slug,
  arborescence,
  price,
  unitType,
  product,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="ProductCard">
      <div className="ProductCard--button">
        <Link
          to={`/${arborescence.Category}/${arborescence.SubCategory}/${slug}`}
          onClick={() => {
            window.scrollTo(0, 0);
            dispatch(saveProduct(product, product.id));
          }}
        >
          <div className="ProductCard--image">
            <div
              className="ProductCard--image-effect"
              style={{ backgroundImage: `url(${picture})` }}
            />
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
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  unitType: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  available: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
