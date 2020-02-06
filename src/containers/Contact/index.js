// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Contact from 'src/components/Contact';

// Action Creators
import { changeInputValueSubject, changeInputValueText, changeInputValueMail } from 'src/store/reducer';

// === State (données) ===
const mapStateToProps = state => ({
  inputValueSubject: state.inputValueSubject,
  inputValueText: state.inputValueText,
  inputValueMail: state.inputValueReportMail,
  user: state.user,
  isAuthenticated: state.isAuthenticated,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  changeInputValueSubject: (inputValue) => {
    dispatch(changeInputValueSubject(inputValue));
  },
  changeInputValueText: (inputValue) => {
    dispatch(changeInputValueText(inputValue));
  },
  changeInputValueMail: (inputValue) => {
    dispatch(changeInputValueMail(inputValue));
  },
});

// Container
const ContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);

// == Export
export default ContactContainer;
