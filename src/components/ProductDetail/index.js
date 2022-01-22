import './ProductDetail.scss';

import { useSelector } from 'react-redux';

import ProductDetailCard from './ProductDetailCard';

const ProductDetail = () => {
  const product = useSelector((state) => state.product.ProductData[1]);

  return (
    <div className="ProductDetail">
      <ProductDetailCard key={product.id} {...product} />
    </div>
  );
};

export default ProductDetail;
