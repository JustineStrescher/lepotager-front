import './Product.scss';

import { useSelector } from 'react-redux';

import ProductCard from './ProductCard';

const Product = () => {
  const productList = useSelector((state) => state.product.ProductData);

  return (
    <div className="Product">
      {productList.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Product;
