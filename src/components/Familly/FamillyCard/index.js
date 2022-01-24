import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import '../Familly.scss';

const FamillyCard = ({ name, picture, slug }) => (

  <div className="FamillyCard">
    <Link to={`/Légume/${slug}`} className="card-link">
      <div className="FamillyCard--button">
        <div className="FamillyCard--image">
          <div className="FamillyCard--image-effect">
            <img src={picture} alt="" />
          </div>
        </div>
        <h2 className="FamillyCard--button-title">
          {name}
        </h2>
      </div>
    </Link>
  </div>
);

FamillyCard.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default FamillyCard;
