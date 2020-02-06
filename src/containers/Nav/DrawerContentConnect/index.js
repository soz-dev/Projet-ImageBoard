// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import DrawerContentConnect from 'src/components/Nav/DrawerContentConnect';

// Action Creators
import {
  changeInputUserPassword,
  changeInputUserPseudo,
  setCurrentUser,
} from 'src/store/reducer';

// === State (données) ===
const mapStateToProps = state => ({
  inputValueUserPassword: state.inputValueUserPassword,
  inputValueUserPseudo: state.inputValueUserPseudo,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  changeInputUserPassword: (inputValue) => {
    dispatch(changeInputUserPassword(inputValue));
  },
  changeInputUserPseudo: (inputValue) => {
    dispatch(changeInputUserPseudo(inputValue));
  },
  setCurrentUser: (decoded) => {
    dispatch(setCurrentUser(decoded));
  },
});

// Container
const DrawerContentConnectContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerContentConnect);

// == Export
export default DrawerContentConnectContainer;
