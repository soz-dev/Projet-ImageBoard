// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Footer from 'src/components/Footer';

// Action Creators
import { modalChangeVisibleMobile, modalOnOkModalMobile, modalOnCancelMobile, setTimeoutStateMobile } from 'src/store/reducer';

// === State (données) ===
const mapStateToProps = state => ({
  modalAddTopicMobileVisible: state.modalFormAddTopicMobile.visible,
  modalconfirmLoading: state.modalFormAddTopic.confirmLoading,
  user: state.user,
  isAuthenticated: state.isAuthenticated,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  modalChangeVisibleMobile: () => {
    dispatch(modalChangeVisibleMobile());
  },
  modalOnOkModalMobile: () => {
    dispatch(modalOnOkModalMobile());
  },
  modalOnCancelMobile: () => {
    dispatch(modalOnCancelMobile());
  },
  setTimeoutStateMobile: () => {
    dispatch(setTimeoutStateMobile());
  },
});

// Container
const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);

// == Export
export default FooterContainer;
