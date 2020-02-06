// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import DiscussionCreation from 'src/components/Main/Posts/DiscussionCreation';

// Action Creators
import { changeInputDescriptionDiscussion, changeInputImageDiscussion } from 'src/store/reducer';

// === State (données) ===
const mapStateToProps = state => ({
  inputValueDescriptionDiscussion: state.inputValueDiscussionDescription,
  inputValueImageDiscussion: state.inputValueDiscussionImage,
  isAuthenticated: state.isAuthenticated,
  user: state.user,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  changeInputDescriptionDiscussion: (inputValue) => {
    dispatch(changeInputDescriptionDiscussion(inputValue));
  },
  changeInputImageDiscussion: (inputValue) => {
    dispatch(changeInputImageDiscussion(inputValue));
  },
});

// Container
const DiscussionCreationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiscussionCreation);

// == Export
export default DiscussionCreationContainer;
