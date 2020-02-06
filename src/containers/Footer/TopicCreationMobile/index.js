// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import TopicCreationMobile from 'src/components/Footer/TopicCreationMobile';

// Action Creators
import { changeInputDescriptionPost, changeInputDescriptionImage } from 'src/store/reducer';

// === State (données) ===
const mapStateToProps = state => ({
  inputValueDescription: state.inputValuePostDescription,
  inputValueImage: state.inputValuePostImage,
  user: state.user,
  isAuthenticated: state.isAuthenticated,
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
const TopicCreationMobileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopicCreationMobile);

// == Export
export default TopicCreationMobileContainer;
