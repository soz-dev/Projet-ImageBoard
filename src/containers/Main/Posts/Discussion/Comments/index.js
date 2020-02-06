// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Comments from 'src/components/Main/Posts/Discussion/Comments';

// Action Creators
import {
  openFullScreenImageComment,
  closeFullScreenImageComment,
  openFullScreenImagePreviewDiscussion,
  closeFullScreenImagePreviewDiscussion,
} from 'src/store/reducer';

// === State (données) ===
const mapStateToProps = state => ({
  stateImageFullScreenVisible: state.modalOpenImageFullScreenComment.visible,
  stateImageFullScreenVisibleId: state.modalOpenImageFullScreenComment.id,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  openFullScreenImage: (id) => {
    dispatch(openFullScreenImageComment(id));
  },
  closeFullScreenImage: () => {
    dispatch(closeFullScreenImageComment());
  },
});

// Container
const CommentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comments);

// == Export
export default CommentsContainer;
