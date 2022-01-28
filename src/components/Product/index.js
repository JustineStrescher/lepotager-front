import './Product.scss';

import Highlight from 'src/components/Highlight';
import Carousel from 'src/components/Carousel';

import { useSelector } from 'react-redux';

import ProductCard from './ProductCard';

const Product = () => {
  // ici on utilise useSelector pour récuperé la recette actuelle en fonction de la liste
  // des recettes présentes dans le state
  const productList = useSelector((state) => state.product.ProductData);

  const category = useSelector((state) => state.category.categoryName);

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
