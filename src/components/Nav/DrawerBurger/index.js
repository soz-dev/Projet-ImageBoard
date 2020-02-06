// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import : local
import './drawerBurger.scss';

// == Composant
const DrawerBurger = ({ isAuthenticated, user }) => (
  <div id="drawerBurger">
    <div className="drawerBurger">
      <div className="drawerBurger-main">
        <nav className="drawerBurger-main-nav">
          <ul className="drawerBurger-main-nav-list">
            <li className="drawerBurger-main-nav-list-link">
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li className="drawerBurger-main-nav-list-link">
              <NavLink exact to="/contact/">Contact</NavLink>
            </li>
            <li className="drawerBurger-main-nav-list-link">
              <NavLink exact to="/developers/">Developers</NavLink>
            </li>
            <li className="drawerBurger-main-nav-list-link">
              <NavLink exact to="/legal-notice/">Legal notice</NavLink>
            </li>
            {isAuthenticated === true && user.status === 1 && (
              <li className="drawerBurger-main-nav-list-admin">
                <NavLink className="drawerBurger-main-nav-list-admin-link" exact to="/admin">Panel Admin</NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  </div>
);

DrawerBurger.propTypes = {
  user: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

// == Export
export default DrawerBurger;
