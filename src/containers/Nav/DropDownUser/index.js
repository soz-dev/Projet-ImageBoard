// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import DropDownUser from 'src/components/Nav/DropDownUser';

// Action Creators
import { setCurrentUser } from 'src/store/reducer';

// === State (données) ===
const mapStateToProps = () => ({
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  setCurrentUser: (decoded) => {
    dispatch(setCurrentUser(decoded));
  },
});

// Container
const DropDownUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropDownUser);

// == Export
export default DropDownUserContainer;
