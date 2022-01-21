import PropTypes from 'prop-types';

import './productDetail.scss';

const ProductDetailCard = ({ picture, title, price }) => (

  <div className="ProductDetailCard">
    <div className="ProductDetailCard--image">
      <img src={picture} alt="" />
    </div>
    <div className="ProductDetailCard--detail">
      <h1>{title}</h1>
      <p>{price} €/kg</p>
      
    </div>
  </div>
);

ProductDetailCard.propTypes = {
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductDetailCard;
