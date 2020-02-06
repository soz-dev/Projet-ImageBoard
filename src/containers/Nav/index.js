// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Nav from 'src/components/Nav';

// Action Creators
import {
  modalChangeVisible,
  modalOnCancel,
  modalOnOkModal,
  setTimeoutState,
  drawerChangeVisible,
  closeDrawer,
  changeView,
  drawerBurgerChangeVisible,
  closeDrawerBurger,
} from 'src/store/reducer';

// === State (données) ===
const mapStateToProps = state => ({
  modalAddTopicVisible: state.modalFormAddTopic.visible,
  modalconfirmLoading: state.modalFormAddTopic.confirmLoading,
  showDrawerUser: state.showDrawerUser,
  showDrawerMenuBurger: state.showDrawerMenuBurger,
  view: state.view,
  isAuthenticated: state.isAuthenticated,
  user: state.user,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  modalChangeVisible: () => {
    dispatch(modalChangeVisible());
  },
  modalOnOkModal: () => {
    dispatch(modalOnOkModal());
  },
  modalOnCancel: () => {
    dispatch(modalOnCancel());
  },
  setTimeoutState: () => {
    dispatch(setTimeoutState());
  },
  drawerChangeVisible: () => {
    dispatch(drawerChangeVisible());
  },
  closeDrawer: () => {
    dispatch(closeDrawer());
  },
  drawerBurgerChangeVisible: () => {
    dispatch(drawerBurgerChangeVisible());
  },
  closeDrawerBurger: () => {
    dispatch(closeDrawerBurger());
  },
  changeView: () => {
    dispatch(changeView());
  },
});

// Container
const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);

// == Export
export default NavContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
