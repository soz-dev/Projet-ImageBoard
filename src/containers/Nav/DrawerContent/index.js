// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import DrawerContent from 'src/components/Nav/DrawerContent';

// Action Creators
import {
  changeInputUserEmail,
  changeInputUserPassword,
  changeInputUserName,
  changeInputUserLastname,
  changeInputUserPseudo,
} from 'src/store/reducer';

// === State (données) ===
const mapStateToProps = state => ({
  inputValueUserEmail: state.inputValueUserEmail,
  inputValueUserPassword: state.inputValueUserPassword,
  inputValueUserName: state.inputValueUserName,
  inputValueUserLastname: state.inputValueUserLastname,
  inputValueUserPseudo: state.inputValueUserPseudo,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  changeInputUserEmail: (inputValue) => {
    dispatch(changeInputUserEmail(inputValue));
  },
  changeInputUserPassword: (inputValue) => {
    dispatch(changeInputUserPassword(inputValue));
  },
  changeInputUserName: (inputValue) => {
    dispatch(changeInputUserName(inputValue));
  },
  changeInputUserLastname: (inputValue) => {
    dispatch(changeInputUserLastname(inputValue));
  },
  changeInputUserPseudo: (inputValue) => {
    dispatch(changeInputUserPseudo(inputValue));
  },
});

// Container
const DrawerContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerContent);

// == Export
export default DrawerContentContainer;
