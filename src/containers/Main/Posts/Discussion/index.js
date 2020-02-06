// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Discussion from 'src/components/Main/Posts/Discussion';

// Action Creators
import {
  openFullScreenImageDiscussion,
  closeFullScreenImageDiscussion,
  openFullScreenImagePreviewDiscussion,
  closeFullScreenImagePreviewDiscussion,
} from 'src/store/reducer';

// === State (données) ===
const mapStateToProps = state => ({
  stateImageFullScreenVisible: state.modalOpenImageFullScreenDiscussion.visible,
  stateImageFullScreenVisibleId: state.modalOpenImageFullScreenDiscussion.id,
  stateImageFullScreenPreview: state.modalOpenFullScreenPreviewComment.visible,
  stateImageFullScreenPreviewId: state.modalOpenFullScreenPreviewComment.id,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  openFullScreenImage: (id) => {
    dispatch(openFullScreenImageDiscussion(id));
  },
  closeFullScreenImage: () => {
    dispatch(closeFullScreenImageDiscussion());
  },
  openFullScreenImagePreview: (id) => {
    dispatch(openFullScreenImagePreviewDiscussion(id));
  },
  closeFullScreenImagePreview: () => {
    dispatch(closeFullScreenImagePreviewDiscussion());
  },
});

// Container
const DiscussionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Discussion);

// == Export
export default DiscussionContainer;
