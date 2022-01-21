import './ProductDetail.scss';

import { useSelector } from 'react-redux';

import ProductDetailCard from './ProductDetailCard';

const ProductDetail = () => {
  const products = useSelector((state) => state.product.ProductData);

  return (
    <div className="ProductDetail">
      {products.map((product) => (
        <ProductDetailCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductDetail;
