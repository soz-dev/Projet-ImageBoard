// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import DiscussionUpdate from 'src/components/Main/Posts/Discussion/DropDownOptionsDiscussion/DiscussionUpdate';

// Action Creators
import {
  changeInputDescriptionDiscussionUpdate,
} from 'src/store/reducer';

// === State (données) ===
const mapStateToProps = state => ({
  inputValueDiscussionDescription: state.inputValueDiscussionDescriptionUpdate,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  changeInputDescription: (inputValue) => {
    dispatch(changeInputDescriptionDiscussionUpdate(inputValue));
  },
});

// Container
const DiscussionUpdateContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiscussionUpdate);

// == Export
export default DiscussionUpdateContainer;
