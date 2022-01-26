import './Product.scss';

import Highlight from 'src/components/Highlight';
import Carousel from 'src/components/Carousel';

import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import { findVegetableByFamilly, findCategory } from '../../selectors/vegetables';

import ProductCard from './ProductCard';

const Product = () => {
  const parameters = useParams();
  const currentSlug = parameters.slug;
  // ici on utilise useSelector pour récuperé la recette actuelle en fonction de la liste
  // des recettes présentes dans le state
  const productList = (
    useSelector((state) => findVegetableByFamilly(state.product.ProductData, currentSlug)));

  const category = useSelector((state) => findCategory(state.product.ProductData, currentSlug));

  return (
    <section className="Product__container">
      <Carousel />
      <div className="Product--title">
        <p>{category}</p>
      </div>
      <div className="Product">
        {productList.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <Highlight />
    </section>
  );
};

export default Product;
