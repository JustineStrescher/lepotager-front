import './ProductDetail.scss';

import Highlight from 'src/components/Highlight';
import Carousel from 'src/components/Carousel';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { findVegetable } from 'src/selectors/vegetables';

import CategoryNav from '../CategoryNav';
import ProductDetailCard from './ProductDetailCard';
import ScrollToTop from '../ScrollToTop';

const ProductDetail = () => {
  const parameters = useParams();
  const currentSlug = parameters.slug;
  const product = useSelector((state) => findVegetable(state.product.allProduct, currentSlug));

  return (
    <section className="ProductDetail__container">
      <CategoryNav />
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
