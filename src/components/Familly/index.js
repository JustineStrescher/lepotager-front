import './Familly.scss';

import { useSelector } from 'react-redux';

import FamillyCard from './FamillyCard';

const Familly = () => {
  const categoryList = useSelector((state) => state.familly.FamillyData);

  return (
    <div className="Familly">
      {categoryList.map((category) => (
        <FamillyCard key={category.id} {...category} />
      ))}
    </div>
  );
};

export default Familly;
