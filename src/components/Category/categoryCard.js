import PropTypes from 'prop-types';

import './Category.scss';

const CategoryCard = ({ name }) => (

  <div className="CategoryCard">
    <a href="">
      <div className="CategoryCard--button">
        <h2 className="CategoryCard--button-title">
          {name}
        </h2>
      </div>
    </a>
  </div>
);

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CategoryCard;
