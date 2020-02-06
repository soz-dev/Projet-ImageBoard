// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from 'src/components/App';

// Action Creators
import {} from 'src/store/reducer';

// === State (données) ===
const mapStateToProps = state => ({
  user: state.user,
  isAuthenticated: state.isAuthenticated,
});

// === Actions ===
const mapDispatchToProps = () => ({

});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;
