import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import '../Category.scss';

const CategoryCard = ({ name, slug }) => (

  <div className="CategoryCard">
    <Link to={`/${slug}`} className="card-link">
      <div className="CategoryCard--button">
        <h2 className="CategoryCard--button-title">
          {name}
        </h2>
      </div>
    </Link>
  </div>
);

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default CategoryCard;
