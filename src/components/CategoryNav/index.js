import './CategoryNav.scss';
import { useDispatch, useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { fetchSubCategories, setCategories } from 'src/actions/categories';

const CategoryNav = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.category.category);

  return (
    <div className="CategoryNav__container">
      {categoryList.map((category) => (
        <NavLink
          style={{ backgroundImage: `url(${category.picture})` }}
          key={category.id}
          className="CategoryNav__container-link"
          to={`/${category.slug}`}
          onClick={() => {
            dispatch(setCategories(category.slug));
            dispatch(fetchSubCategories());
          }}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default CategoryNav;
