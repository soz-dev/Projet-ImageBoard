// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// Import Antd:
import { Modal, Drawer, Dropdown, Menu } from 'antd';

// React-Dom
import { NavLink } from 'react-router-dom';

// Import Components:
import TopicCreation from 'src/containers/Nav/TopicCreation';
import DrawerContent from 'src/containers/Nav/DrawerContent';
import DrawerContentConnect from 'src/containers/Nav/DrawerContentConnect';
import DropDownUser from 'src/containers/Nav/DropDownUser';

import DrawerBurger from 'src/containers/Nav/DrawerBurger';

// == Import : local
import './nav.scss';

// == Composant
class Nav extends React.Component {
  state = {
    userData: [],
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/me')
      .then((response) => {
        this.setState({
          userData: response.data,
        });
        console.log(response.data);
      })
      .catch(err => console.log(err.response.data));
  }

  render() {
    const {
      // ------- MODAL --------
      modalAddTopicVisible,
      modalChangeVisible,
      modalOnOkModal,
      modalOnCancel,
      setTimeoutState,
      // Drawer
      drawerChangeVisible,
      showDrawerUser,
      closeDrawer,
      // Drawer menu Burger
      drawerBurgerChangeVisible,
      showDrawerMenuBurger,
      closeDrawerBurger,
      changeViewDrawerBurger,
      // Views
      view,
      changeView,
      isAuthenticated,
    } = this.props;

    const { userData } = this.state;

    // ---------- MODAL --------------------------
    // Handler passer la modal d'ajout de topic en visible:
    const handleShowModal = (event) => {
      event.preventDefault();
      modalChangeVisible();
    };
      // Au moment de presser Ok dans la modal:
    const handleOnOkModal = (event) => {
      event.preventDefault();
      modalOnOkModal();
      setTimeout(() => {
        setTimeoutState();
      }, 5000);
    };
      // Au moment de presser Cancel dans la modal:
    const handleOnCancelModal = () => {
      modalOnCancel();
    };

    // ----------------  DRAWER ---------------------------
    const handlerShowDrawer = (event) => {
      event.preventDefault();
      drawerChangeVisible();
    };
    const drawerOnClose = () => {
      closeDrawer();
    };
    const handlerChangeView = () => {
      changeView();
    };

    // ----------------  DRAWER BURGER MENU ---------------------------
    const handlerShowDrawerMenuBurger = (event) => {
      event.preventDefault();
      drawerBurgerChangeVisible();
    };
    const drawerMenuBurgerOnClose = () => {
      closeDrawerBurger();
    };
    const handlerChangeViewMenuBurger = () => {
      changeViewDrawerBurger();
    };

    return (
      <div id="nav">
        <nav className="nav">
          <div className="nav-content">
            <div className="nav-content-left">
              <div className="nav-content-left-icon" onClick={handlerShowDrawerMenuBurger}>Logo</div>
              <Drawer
                title="Menu"
                visible={showDrawerMenuBurger}
                onClose={drawerMenuBurgerOnClose}
                placement="left"
                closable={false}
                className="drawerBurgerMenu"
              >
                <DrawerBurger changeView={handlerChangeViewMenuBurger} />
              </Drawer>
              <NavLink exact to="/">
                <h1 className="nav-content-left-title">O'Board</h1>
              </NavLink>
            </div>
            <div className="nav-content-right">
              <div className="nav-content-right-addTopic" onClick={handleShowModal}>
                <div className="nav-content-right-addTopic-icon" />
                <div className="nav-content-right-addTopic-text">Ajouter un topic</div>
              </div>
              {isAuthenticated === false && (
                <div className="nav-content-right-user" onClick={handlerShowDrawer}>User</div>
              )}
              {isAuthenticated === true && (
                <Dropdown overlay={<DropDownUser />} trigger={['click']} placement="bottomRight" width="150px" className="dropDownUser">
                  <div className="nav-content-right-user">
                    <img className="nav-content-right-user" src={`http://localhost:3000/${userData.iconImage}`} alt="icone" />
                  </div>
                </Dropdown>
              )}
              {view === true && (
              <div className="drawerUserConnect">
                <Drawer
                  title="Inscription"
                  visible={showDrawerUser}
                  onClose={drawerOnClose}
                  closable={false}
                  className="drawerUserConnect-drawer"
                >
                  <DrawerContent changeView={handlerChangeView} />
                </Drawer>
              </div>
              )}
              {view === false && (
              <div className="drawerUserConnect">
                <Drawer
                  title="Connexion"
                  visible={showDrawerUser}
                  onClose={drawerOnClose}
                  closable={false}
                  className="drawerUserConnect-drawer"
                >
                  <DrawerContentConnect changeView={handlerChangeView} />
                </Drawer>
              </div>
              )}
            </div>
          </div>
        </nav>
        <div id="modalAddTopic">
          <Modal
            visible={modalAddTopicVisible}
            onOk={handleOnOkModal}
            onCancel={handleOnCancelModal}
            closable={false}
            footer={false}
            className="modalAddTopic"
          >
            <TopicCreation />
          </Modal>
        </div>
      </div>
    );
  }
}

Nav.propTypes = {
  modalAddTopicVisible: PropTypes.bool.isRequired,
  modalChangeVisible: PropTypes.func.isRequired,
  modalOnOkModal: PropTypes.func.isRequired,
  modalOnCancel: PropTypes.func.isRequired,
  setTimeoutState: PropTypes.func.isRequired,
  // Drawer
  drawerChangeVisible: PropTypes.func.isRequired,
  closeDrawer: PropTypes.func.isRequired,
  showDrawerUser: PropTypes.bool.isRequired,
  // Drawer Burger
  drawerBurgerChangeVisible: PropTypes.func.isRequired,
  closeDrawerBurger: PropTypes.func.isRequired,
  changeViewDrawerBurger: PropTypes.func,
  showDrawerMenuBurger: PropTypes.bool.isRequired,
  // View
  view: PropTypes.bool.isRequired,
  changeView: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

Nav.defaultProps = {
  changeViewDrawerBurger: undefined,
};

// == Export
export default Nav;
