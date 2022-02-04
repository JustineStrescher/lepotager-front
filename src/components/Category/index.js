import './Category.scss';

import Highlight from 'src/components/Highlight';
import Carousel from 'src/components/Carousel';

import { useSelector } from 'react-redux';

import CategoryCard from './CategoryCard';
import ScrollToTop from '../ScrollToTop';

const Category = () => {
  const categoryList = useSelector((state) => state.category.category);

  return (
    <section className="Category__container">
      <ScrollToTop />
      <p className="Category__container-title">Le potager des culs fouettés</p>
      <Carousel />
      <div className="Category">
        {categoryList.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
      <Highlight />
    </section>
  );
};

export default Category;
