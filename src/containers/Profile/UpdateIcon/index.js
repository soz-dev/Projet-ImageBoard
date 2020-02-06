// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import UpdateIcon from 'src/components/Profile/UpdateIcon';

// Action Creators
import { changeInputUpdateIcon } from 'src/store/reducer';

// === State (données) ===
const mapStateToProps = state => ({
  inputValueIcon: state.inputValueIcon,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  changeInputUpdateIcon: (inputValue) => {
    dispatch(changeInputUpdateIcon(inputValue));
  },
});

// Container
const UpdateIconContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdateIcon);

// == Export
export default UpdateIconContainer;
