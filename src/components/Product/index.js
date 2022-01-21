import './Product.scss';

import { useSelector } from 'react-redux';

import ProductCard from './productCard';

const Product = () => {
  const productList = useSelector((state) => state.familly.FamillyData);

  return (
    <div className="Product">
      {productList.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Product;
