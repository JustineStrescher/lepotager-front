import './Familly.scss';

import Highlight from 'src/components/Highlight';
import Carousel from 'src/components/Carousel';

import { useSelector } from 'react-redux';
import CategoryNav from '../CategoryNav';
import FamillyCard from './FamillyCard';
import ScrollToTop from '../ScrollToTop';

const Familly = () => {
  const categoryList = useSelector((state) => state.category.subCategory);
  const categoryName = useSelector((state) => state.category.categoryName);

  return (
    <section className="Family__container">
      <CategoryNav />
      <ScrollToTop />
      <div className="titlePage">{categoryName}</div>
      <div className="Familly">
        {categoryList.map((category) => (
          <FamillyCard key={category.id} {...category} />
        ))}
      </div>
      <Highlight />
      <Carousel />
    </section>
  );
};

export default Familly;
