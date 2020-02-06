// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import CommentCreation from 'src/components/Main/Posts/Discussion/CommentCreation';

// Action Creators
import { changeInputDescriptionComment, changeInputImageComment } from 'src/store/reducer';

// === State (données) ===
const mapStateToProps = state => ({
  inputValueDescriptionComment: state.inputValueCommentDescription,
  inputValueImageComment: state.inputValueCommentImage,
  isAuthenticated: state.isAuthenticated,
  user: state.user,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  changeInputDescriptionComment: (inputValue) => {
    dispatch(changeInputDescriptionComment(inputValue));
  },
  changeInputImageComment: (inputValue) => {
    dispatch(changeInputImageComment(inputValue));
  },
});

// Container
const CommentCreationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentCreation);

// == Export
export default CommentCreationContainer;
