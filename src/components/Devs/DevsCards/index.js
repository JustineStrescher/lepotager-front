import PropTypes from 'prop-types';
import '../Dev.scss';

const DevsCard = ({
  name,
  picture,
  unit,
}) => (

  <div className="ProductCard">
    <div className="ProductCard--button height">
      <div className="ProductCard--image">
        <div
          className="ProductCard--image-effect"
          style={{ backgroundImage: `url(${picture})` }}
        />
      </div>
      <div className="ProductCard--button-title">
        <h1 className="ProductCard--button-title-title">{name}
        </h1>
        <p className="ProductCard--button-title-price">{unit} </p>
      </div>
    </div>
  </div>
);

DevsCard.propTypes = {
  name: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default DevsCard;
