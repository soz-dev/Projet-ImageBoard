// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import DrawerBurger from 'src/components/Nav/DrawerBurger';

// Action Creators
import {
  changeInputDeleteUser,
} from 'src/store/reducer';

// === State (données) ===
const mapStateToProps = state => ({
  user: state.user,
  isAuthenticated: state.isAuthenticated,
});

// === Actions ===
const mapDispatchToProps = () => ({
});

// Container
const DrawerBurgerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerBurger);

// == Export
export default DrawerBurgerContainer;
