import PropTypes from 'prop-types';

import './Familly.scss';

const FamillyCard = ({ name, picture }) => (

  <div className="FamillyCard">
    <div className="FamillyCard--button">
      <a href="">
        <div className="FamillyCard--image">
          <img src={picture} alt="" />
        </div>
        <h2 className="FamillyCard--button-title">
          {name}
        </h2>
      </a>
    </div>
  </div>
);

FamillyCard.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default FamillyCard;
