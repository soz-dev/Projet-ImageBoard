// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Main from 'src/components/Main';

// Action Creators
import { openCatalog, closeCatalog } from 'src/store/reducer';

// === State (données) ===
const mapStateToProps = state => ({
  postData: state.postData,
  stateCatalogVisible: state.stateCatalogVisible.visible,
  isAuthenticated: state.isAuthenticated,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  openCatalog: () => {
    dispatch(openCatalog());
  },
  closeCatalog: () => {
    dispatch(closeCatalog());
  },
});

// Container
const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

// == Export
export default MainContainer;
