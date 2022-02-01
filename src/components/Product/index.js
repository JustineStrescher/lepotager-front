import './Product.scss';
import { useEffect } from 'react';

import { saveProducts } from '../../actions/product';

import Highlight from 'src/components/Highlight';
import Carousel from 'src/components/Carousel';

import { useSelector, useDispatch } from 'react-redux';

import ProductCard from './ProductCard';
import ScrollToTop from '../ScrollToTop';

const Product = () => {
  const dispatch = useDispatch();

  // localStorage.setItem('products', JSON.stringify(productList));

  useEffect(() => {
    const productList2 = useSelector((state) => state.product.ProductData);
    localStorage.setItem('products', JSON.stringify(productList2));
    if (productList.lenght > 1) {
      const productListRefresh = JSON.parse(localStorage.getItem('products'));
      dispatch(saveProducts(productListRefresh));
      console.log(productListRefresh);
    }
  }, []);
  const productList = useSelector((state) => state.product.ProductData);
  const category = useSelector((state) => state.category.subCategoryName);

  return (
    <section className="Product__container">
      <ScrollToTop />
      <div className="Product--title">
        <p>{category}</p>
      </div>
      <div className="Product">
        {productList.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <Highlight />
      <Carousel />
    </section>
  );
};

export default Product;
