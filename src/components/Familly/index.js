import './Familly.scss';

import Highlight from 'src/components/Highlight';
import Carousel from 'src/components/Carousel';

import { useSelector } from 'react-redux';
import CategoryNav from '../CategoryNav';
import FamillyCard from './FamillyCard';
import ScrollToTop from '../ScrollToTop';

const Familly = () => {
  const categoryList = useSelector((state) => state.category.subCategory);

  return (
    <section className="Family__container">
      <CategoryNav />
      <ScrollToTop />
      <div className="titlePage">Legumes</div>
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
