import PropTypes from 'prop-types';

import './Familly.scss';

const FamillyCard = ({ name, picture }) => (

  <div className="FamillyCard">
    <a href="">
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
    </a>
  </div>
);

FamillyCard.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default FamillyCard;
