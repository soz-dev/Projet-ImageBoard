// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import StaticPost from 'src/components/StaticPost';

// Action Creators
import {
  changePostStatusComments,
  modalOnCancelDiscussion,
  modalOnOkModalDiscussion,
  setTimeoutStateDiscussion,
  openFullScreenImage,
  closeFullScreenImage,
  openAddDiscussion,
  closeAddDiscussion,
  openFullScreenImagePreview,
  closeFullScreenImagePreview,
} from 'src/store/reducer';

// === State (données) ===
const mapStateToProps = state => ({
  user: state.user,
  postStatusTextDesktop: state.postTextStatus.desktop,
  postStatusComments: state.postTextStatus.comments,
  isAuthenticated: state.isAuthenticated,
  stateImageFullScreenVisible: state.modalOpenImageFullScreen.visible,
  stateImageFullScreenVisibleId: state.modalOpenImageFullScreen.id,
  stateAddDiscussion: state.modalAddDiscussion.visible,
  stateAddDiscussionId: state.modalAddDiscussion.id,
  stateImageFullScreenPreview: state.modalOpenFullScreenPreviewDiscussion.visible,
  stateImageFullScreenPreviewId: state.modalOpenFullScreenPreviewDiscussion.id,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  changePostStatusComments: () => {
    dispatch(changePostStatusComments());
  },
  modalOnOkModal: () => {
    dispatch(modalOnOkModalDiscussion());
  },
  modalOnCancel: () => {
    dispatch(modalOnCancelDiscussion());
  },
  setTimeoutState: () => {
    dispatch(setTimeoutStateDiscussion());
  },
  openFullScreenImage: (id) => {
    dispatch(openFullScreenImage(id));
  },
  closeFullScreenImage: () => {
    dispatch(closeFullScreenImage());
  },
  openFullScreenImagePreview: (id) => {
    dispatch(openFullScreenImagePreview(id));
  },
  closeFullScreenImagePreview: () => {
    dispatch(closeFullScreenImagePreview());
  },
  openAddDiscussion: (id) => {
    dispatch(openAddDiscussion(id));
  },
  closeAddDiscussion: () => {
    dispatch(closeAddDiscussion());
  },
});

// Container
const StaticPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StaticPost);

// == Export
export default StaticPostContainer;
