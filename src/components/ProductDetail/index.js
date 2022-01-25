import './ProductDetail.scss';

import Highlight from 'src/components/Highlight';
import Carousel from 'src/components/Carousel';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { findVegetable } from 'src/selectors/vegetables';

import ProductDetailCard from './ProductDetailCard';

const ProductDetail = () => {
  const parameters = useParams();
  const currentSlug = parameters.slug;
  // ici on utilise useSelector pour récuperé la recette actuelle en fonction de la liste
  // des recettes présentes dans le state
  const product = useSelector((state) => findVegetable(state.product.ProductData, currentSlug));

  return (
    <section className="ProductDetail__container">
      <Carousel />
      <div className="ProductDetail">
        <ProductDetailCard key={product.id} {...product} />
      </div>
      <Highlight />
    </section>
  );
};

export default ProductDetail;
