import './productDetail.scss';

import { useSelector } from 'react-redux';

import ProductDetailCard from './productDetail';

const ProductDetail = () => {
  const productList = useSelector((state) => state.product.ProductData);

  return (
    <div className="ProductDetail">
      {productList.map((product) => (
        <ProductDetailCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductDetail;
