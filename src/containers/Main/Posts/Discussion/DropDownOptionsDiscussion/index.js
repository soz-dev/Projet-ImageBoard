// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import DropDownOptionsDiscussion from 'src/components/Main/Posts/Discussion/DropDownOptionsDiscussion';

// Action Creators
import {
  modalChangeVisibleDiscussionUpdate,
  modalOnCancelDiscussionUpdate,
  modalOnOkModalDiscussionUpdate,
  setTimeoutStateDiscussionUpdate,
} from 'src/store/reducer';

// === State (données) ===
const mapStateToProps = state => ({
  modalFormUpdateDiscussionVisible: state.modalFormUpdateDiscussion.visible,
  modalconfirmLoading: state.modalFormUpdateDiscussion.confirmLoading,
  isAuthenticated: state.isAuthenticated,
  user: state.user,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  modalChangeVisible: () => {
    dispatch(modalChangeVisibleDiscussionUpdate());
  },
  modalOnOkModal: () => {
    dispatch(modalOnOkModalDiscussionUpdate());
  },
  modalOnCancel: () => {
    dispatch(modalOnCancelDiscussionUpdate());
  },
  setTimeoutState: () => {
    dispatch(setTimeoutStateDiscussionUpdate());
  },
});

// Container
const DropDownOptionsDiscussionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropDownOptionsDiscussion);

// == Export
export default DropDownOptionsDiscussionContainer;
