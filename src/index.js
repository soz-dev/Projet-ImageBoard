// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Import React Router:
import { BrowserRouter as Router } from 'react-router-dom';

// Import CSS AntD:
import 'antd/dist/antd.css';

// == Import : local
import App from 'src/containers/App';

import store from 'src/store';

// == Render
const rootComponent = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

render(rootComponent, document.getElementById('root'));
