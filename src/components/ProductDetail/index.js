import './ProductDetail.scss';

import Highlight from 'src/components/Highlight';
import Carousel from 'src/components/Carousel';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { findVegetable } from 'src/selectors/vegetables';

import ProductDetailCard from './ProductDetailCard';
import ScrollToTop from '../ScrollToTop';

const ProductDetail = () => {
  const parameters = useParams();
  const currentSlug = parameters.slug;
  // ici on utilise useSelector pour récuperé la recette actuelle en fonction de la liste
  // des recettes présentes dans le state
  const product = useSelector((state) => findVegetable(state.product.ProductData, currentSlug));

  return (
    <section className="ProductDetail__container">
      <ScrollToTop />
      <div className="ProductDetail">
        <ProductDetailCard key={product.id} {...product} />
      </div>
      <Highlight />
      <Carousel />
    </section>
  );
};

export default ProductDetail;
