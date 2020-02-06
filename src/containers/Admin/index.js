// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Admin from 'src/components/Admin';

// Action Creators
import {
  changeInputDeleteUser,
} from 'src/store/reducer';

// === State (données) ===
const mapStateToProps = state => ({
  inputValueId: state.inputValueId,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  changeInputDeleteUser: (inputValue) => {
    dispatch(changeInputDeleteUser(inputValue));
  },
});

// Container
const AdminContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Admin);

// == Export
export default AdminContainer;
