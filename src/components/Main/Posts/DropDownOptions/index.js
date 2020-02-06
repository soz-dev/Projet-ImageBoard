// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// Import Axios
import axios from 'axios';

// Import React-Dom:
import { NavLink } from 'react-router-dom';

// == Import : local
import './dropdownoptions.scss';

// == Composant
const DropDownOptions = ({
  postId,
  postAuthor,
  isAuthenticated,
  user,
}) => {
  const clickHandler = (event) => {
    event.preventDefault();
    const post = {
      id: postId,
    };
    axios.post('http://localhost:3000/api/posts/deletePost', post)
      .then(response => console.log(response.data))
      .catch(() => {
        console.log('Une erreur s\'est produite');
      });
    window.location.href = 'http://localhost:8080/';
  };

  console.log(user);

  return (
    <div id="dropDownOptions">
      <div className="dropDownOptions">
        <NavLink exact to="/contact">
          <button type="submit" value="" className="dropDownOptions-report">Signaler un post</button>
        </NavLink>
        {isAuthenticated === true && (user.username === postAuthor || user.status === 1) && (
        <form onSubmit={clickHandler} method="post" className="dropDownOptions-form">
          <input name="id" type="hidden" value={postId} />
          <button type="submit" className="dropDownOptions-form-delete">Supprimer ce post</button>
        </form>
        )}
      </div>
    </div>
  );
};

DropDownOptions.propTypes = { 
  postId: PropTypes.string.isRequired,
  postAuthor: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

// == Export
export default DropDownOptions;
