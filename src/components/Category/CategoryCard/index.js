import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { fetchSubCategories, setCategories } from '../../../actions/categories';

import '../Category.scss';

const CategoryCard = ({ name, slug }) => {
  const dispatch = useDispatch();
  return (
    <div className="CategoryCard">
      <Link
        to={`/${slug}`}
        className="card-link"
        onClick={() => {
          dispatch(setCategories(slug));
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
};

export default CategoryCard;
