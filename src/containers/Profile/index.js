// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Profile from 'src/components/Profile';

// Action Creators
import {
  modalChangeVisibleUser,
  modalOnCancelUser,
  modalOnOkModalUser,
  setTimeoutStateUser,
  setCurrentUser,
  changeInputUpdatePseudo,
  changeInputUpdateMail,
  changeInputUpdateDescription,
  changeInputUpdatePassword,
} from 'src/store/reducer';

// === State (données) ===
const mapStateToProps = state => ({
  modalAddIconVisible: state.modalFormAddIcon.visible,
  inputValuePassword: state.inputValuePassword,
  inputValueIcon: state.inputValueIcon,
  inputValuePseudo: state.inputValuePseudo,
  inputValueMail: state.inputValueMail,
  inputValueDescription: state.inputValueDescription,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  modalChangeVisible: () => {
    dispatch(modalChangeVisibleUser());
  },
  modalOnOkModal: () => {
    dispatch(modalOnOkModalUser());
  },
  modalOnCancel: () => {
    dispatch(modalOnCancelUser());
  },
  setTimeoutState: () => {
    dispatch(setTimeoutStateUser());
  },
  changeInputUpdatePseudo: (inputValue) => {
    dispatch(changeInputUpdatePseudo(inputValue));
  },
  changeInputUpdateMail: (inputValue) => {
    dispatch(changeInputUpdateMail(inputValue));
  },
  changeInputUpdateDescription: (inputValue) => {
    dispatch(changeInputUpdateDescription(inputValue));
  },
  changeInputUpdatePassword: (inputValue) => {
    dispatch(changeInputUpdatePassword(inputValue));
  },
  setCurrentUser: (decoded) => {
    dispatch(setCurrentUser(decoded));
  },
});

// Container
const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

// == Export
export default ProfileContainer;
