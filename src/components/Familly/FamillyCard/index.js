import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { setSubCategories } from '../../../actions/categories';
import { fetchProductsByCategory } from '../../../actions/product';

import '../Familly.scss';

const FamillyCard = ({
  name,
  picture,
  slug,
  arborescence,
  id,
}) => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.category.categoryId);

  return (
    <div className="FamillyCard">
      <div className="FamillyCard--button">
        <Link
          to={`/${arborescence.Category}/${arborescence.SubCategory}`}
          className="card-link"
          onClick={() => {
            dispatch(setSubCategories(id, name));
            console.log(categoryId);
            dispatch(fetchProductsByCategory());
          }}
        >
          <div className="FamillyCard--image">
            <div className="FamillyCard--image-effect">
              <img src={picture} alt="" />
            </div>
          </div>
          <h2 className="FamillyCard--button-title">
            {name}
          </h2>
        </Link>
      </div>
    </div>
  );
};

FamillyCard.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default FamillyCard;
