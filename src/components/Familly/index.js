import './Familly.scss';

import Highlight from 'src/components/Highlight';
import Carousel from 'src/components/Carousel';

import { useSelector } from 'react-redux';

import FamillyCard from './FamillyCard';

const Familly = () => {
  const categoryList = useSelector((state) => state.familly.FamillyData.categories);

  return (
    <section className="Family__container">
      <Carousel />
      <div className="Familly">
        {categoryList.map((category) => (
          <FamillyCard key={category.id} {...category} />
        ))}
      </div>
      <Highlight />
    </section>
  );
};

export default Familly;
