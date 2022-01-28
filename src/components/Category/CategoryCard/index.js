import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { fetchSubCategories, setCategories } from '../../../actions/categories';

import '../Category.scss';

const CategoryCard = ({ name, slug, id }) => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.category.categoryId);
  return (
    <div className="CategoryCard">
      <Link
        to={`/${slug}`}
        className="card-link"
        onClick={() => {
          dispatch(setCategories(1));
          console.log(categoryId);
          dispatch(fetchSubCategories());
        }}
      >
        <div className="CategoryCard--button">
          <h2 className="CategoryCard--button-title">
            {name}
          </h2>
        </div>
      </Link>
    </div>
  );
};

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CategoryCard;
