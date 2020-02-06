// == Import : npm
import React from 'react';

import { NavLink } from 'react-router-dom';

// == Import : local
import './developers.scss';

// == Composant
const Developers = () => (
  <div id="developers">
    <div className="wrapper">
      <div className="wrapper-developers">
        <NavLink exact to="/">
          <div className="wrapper-developers-iconReturn">Retour Home</div>
        </NavLink>
        <div className="wrapper-developers-content-group">
          <div className="wrapper-developers-content">
            <h1 className="wrapper-developers-content-title">Eva</h1>
            <img className="wrapper-developers-image" alt="" src="src/materials/photos-dev/eva.jpg" />
            <ul>
              <li><span className="wrapper-developers-subtitles">Rôle : Projet Manager - Git Master</span></li>
              <li><a href="https://www.linkedin.com/in/eva-barbaro-362229187/" target="_blank" rel="noopener noreferrer"><span className="wrapper-developers-subtitles-links">Linkedin</span></a></li>
            </ul>
          </div>
          <div className="wrapper-developers-content">
            <h1 className="wrapper-developers-content-title">Gilles</h1>
            <img className="wrapper-developers-image" alt="" src="src/materials/photos-dev/gilles.jpg" />
            <ul>
              <li><span className="wrapper-developers-subtitles">Rôle : Product Owner</span></li>
              <li><a href="https://www.linkedin.com/in/gilles-pothieu-b43143180/" target="_blank" rel="noopener noreferrer"><span className="wrapper-developers-subtitles-links">Linkedin</span></a></li>
            </ul>
          </div>
          <div className="wrapper-developers-content">
            <h1 className="wrapper-developers-content-title">Sofyan</h1>
            <img className="wrapper-developers-image" alt="" src="src/materials/photos-dev/sofyan.jpg" />
            <ul>
              <li><span className="wrapper-developers-subtitles">Rôle : Lead Front</span></li>
              <li><a href="https://www.linkedin.com/in/sofyan-zarouri-7368a518a/" target="_blank" rel="noopener noreferrer"><span className="wrapper-developers-subtitles-links">Linkedin</span></a></li>
            </ul>
          </div>
          <div className="wrapper-developers-content">
            <h1 className="wrapper-developers-content-title">Thibaud</h1>
            <img className="wrapper-developers-image" alt="" src="src/materials/photos-dev/thibaud.jpg" />
            <ul>
              <li><span className="wrapper-developers-subtitles">Rôle : Lead Back</span></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><span className="wrapper-developers-subtitles-links">Linkedin</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default Developers;
