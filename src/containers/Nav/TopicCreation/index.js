// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import TopicCreation from 'src/components/Nav/TopicCreation';

// Action Creators
import { changeInputDescriptionPost, changeInputDescriptionImage } from 'src/store/reducer';

// === State (données) ===
const mapStateToProps = state => ({
  inputValueDescription: state.inputValuePostDescription,
  inputValueImage: state.inputValuePostImage,
  isAuthenticated: state.isAuthenticated,
  user: state.user,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  changeInputDescriptionPost: (inputValue) => {
    dispatch(changeInputDescriptionPost(inputValue));
  },
  changeInputDescriptionImage: (inputValue) => {
    dispatch(changeInputDescriptionImage(inputValue));
  },
});

// Container
const TopicCreationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopicCreation);

// == Export
export default TopicCreationContainer;
