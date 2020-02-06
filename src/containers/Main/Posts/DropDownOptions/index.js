// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import DropDownOptions from 'src/components/Main/Posts/DropDownOptions';

// Action Creators
import {  } from 'src/store/reducer';

// === State (données) ===
const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated,
  user: state.user,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
});

// Container
const DropDownOptionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropDownOptions);

// == Export
export default DropDownOptionsContainer;
