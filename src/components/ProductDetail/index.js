import './ProductDetail.scss';

import Highlight from 'src/components/Highlight';
import Carousel from 'src/components/Carousel';

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { findVegetable } from 'src/selectors/vegetables';

import ProductDetailCard from './ProductDetailCard';
import ScrollToTop from '../ScrollToTop';
import { saveProduct } from '../../actions/product';

const ProductDetail = () => {
  useEffect(() => {
  }, []);

  const dispatch = useDispatch();
  const parameters = useParams();
  const currentSlug = parameters.slug;
  const product = useSelector((state) => findVegetable(state.product.allProduct, currentSlug));

  return (
    <section className="ProductDetail__container">
      <ScrollToTop />
      <div className="titlePage">
        <p>{product.name}</p>
      </div>
      <div className="ProductDetail">
        <ProductDetailCard key={product.id} {...product} />
      </div>
      <Highlight />
      <Carousel />
    </section>
  );
};

export default ProductDetail;
