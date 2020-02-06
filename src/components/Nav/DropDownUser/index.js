// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// Import React-Dom:
import { NavLink } from 'react-router-dom';

import setAuthToken from 'src/setAuthToken';

// == Import : local
import './dropdownuser.scss';

// == Composant
const DropDownUser = ({ setCurrentUser }) => {
  const handleSubmitLogout = () => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    setCurrentUser({});
    window.location.href = 'http://localhost:8080/';
  };

  return (
    <div id="dropDownOptions">
      <div className="dropDownOptions">
        <NavLink exact to="/profile">
          <button type="submit" className="dropDownOptions-profile">Votre profil</button>
        </NavLink>
      </div>
      <div className="dropDownOptions">
        <form onSubmit={handleSubmitLogout}>
          <button type="submit" className="dropDownOptions-deconnexion">Se déconnecter</button>
        </form>
      </div>
    </div>
  );
};


DropDownUser.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
};

// == Export
export default DropDownUser;
