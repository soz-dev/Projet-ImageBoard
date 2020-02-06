// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ModalExplorer from 'src/components/Main/ModalExplorer';

// Action Creators
import {  } from 'src/store/reducer';

// === State (données) ===
const mapStateToProps = state => ({
});

// === Actions ===
const mapDispatchToProps = {};

// Container
const ModalExplorerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalExplorer);

// == Export
export default ModalExplorerContainer;
