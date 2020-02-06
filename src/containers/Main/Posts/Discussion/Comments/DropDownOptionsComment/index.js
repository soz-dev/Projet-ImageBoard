// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import DropDownOptionsComment from 'src/components/Main/Posts/Discussion/Comments/DropDownOptionsComment';

// Action Creators
import {
  modalChangeVisibleCommentUpdate,
  modalOnOkModalCommentUpdate,
  modalOnCancelCommentUpdate,
  setTimeoutStateCommentUpdate,
} from 'src/store/reducer';

// === State (données) ===
const mapStateToProps = state => ({
  modalFormUpdateCommentVisible: state.modalFormUpdateComment.visible,
  modalconfirmLoading: state.modalFormUpdateComment.confirmLoading,
  isAuthenticated: state.isAuthenticated,
  user: state.user,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  modalChangeVisible: () => {
    dispatch(modalChangeVisibleCommentUpdate());
  },
  modalOnOkModal: () => {
    dispatch(modalOnOkModalCommentUpdate());
  },
  modalOnCancel: () => {
    dispatch(modalOnCancelCommentUpdate());
  },
  setTimeoutState: () => {
    dispatch(setTimeoutStateCommentUpdate());
  },
});

// Container
const DropDownOptionsCommentContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropDownOptionsComment);

// == Export
export default DropDownOptionsCommentContainer;
