// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import store from 'src/store';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import setAuthToken from 'src/setAuthToken';
import { setCurrentUser } from 'src/store/reducer';

// Import components:
import Nav from 'src/containers/Nav';
import Main from 'src/containers/Main';
import Contact from 'src/containers/Contact';
import Footer from 'src/containers/Footer';
import Developers from 'src/components/Developers';
import LegalNotice from 'src/components/LegalNotice';
import Profile from 'src/containers/Profile';
import ErrorPage from 'src/components/ErrorPage';
import StaticPost from 'src/containers/StaticPost';
import Admin from 'src/containers/Admin';

// == Import : local
import './app.scss';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
}

// == Composant
const App = ({ user, isAuthenticated }) => (
  <div id="app">
    <Nav />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/developers" component={Developers} />
      <Route exact path="/legal-notice" component={LegalNotice} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/staticpost/post/:id" component={StaticPost} />
      {isAuthenticated === true && user.status === 1 && (
        <Route exact path="/admin" component={Admin} />
      )}
      <Route exact path="/error" component={ErrorPage} />
      <Route render={() => <ErrorPage message="Page non trouvée" />} />
    </Switch>
    <Footer />
  </div>
);

App.propTypes = {
  user: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

// == Export
export default App;
