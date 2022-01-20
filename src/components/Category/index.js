import './Category.scss';

import { useSelector } from 'react-redux';

import CategoryCard from './categoryCard';

const Category = () => {
  const categoryList = useSelector((state) => state.category.CategoryData);

  return (
    <div className="Category">
      {categoryList.map((category) => (
        <CategoryCard key={category.id} {...category} />
      ))}
    </div>
  );
};

export default Category;
