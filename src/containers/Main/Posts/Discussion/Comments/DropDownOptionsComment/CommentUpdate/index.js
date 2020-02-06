// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import CommentUpdate from 'src/components/Main/Posts/Discussion/Comments/DropDownOptionsComment/CommentUpdate';

// Action Creators
import {
  changeInputDescriptionCommentUpdate,
} from 'src/store/reducer';

// === State (données) ===
const mapStateToProps = state => ({
  inputValueCommentDescription: state.inputValueCommentDescriptionUpdate,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  changeInputDescription: (inputValue) => {
    dispatch(changeInputDescriptionCommentUpdate(inputValue));
  },
});

// Container
const CommentUpdateContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentUpdate);

// == Export
export default CommentUpdateContainer;
