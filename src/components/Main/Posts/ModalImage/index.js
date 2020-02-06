// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './modalslideshowmobile.scss';

// == Composant
const ModalImage = ({
  image,
}) => (
  <div id="modalImage">
    <div className="modalImage">
      <div className="modalImage-imageBox">
        <div className="modalImage-imageBox-div">
          <img src={image} alt="" className="modalImage-imageBox-div-image" />
        </div>
      </div>
    </div>
  </div>
);

ModalImage.propTypes = {
  image: PropTypes.string.isRequired,
};

// == Export
export default ModalImage;
