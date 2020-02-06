import React from 'react';

// import de ant design
import { Icon } from 'antd';

// import de react router
import { NavLink } from 'react-router-dom';

import './error.scss';

const ErrorPage = () => (
  <main id="error">
    <div className="error">
      <div className="error-text">
        <h1 className="error-text-title">Erreur 404</h1>
        <p className="error-text-content">La page demandée n'a pas pû être trouvée</p>
        <div className="error-text-return">
          <Icon type="right" />
          <NavLink exact to="/">
            <a href="#" className="error-text-return-home">Back home</a>
          </NavLink>
          <Icon type="left" />
        </div>
      </div>
      <div className="error-image">
        <img className="error-image-content" alt="" src="" />
      </div>
    </div>
  </main>
);

export default ErrorPage;
