// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// Import React-Dom:
import { NavLink } from 'react-router-dom';

// Import Component:
import TopicCreationMobile from 'src/containers/Footer/TopicCreationMobile';

// Import Antd:
import { Modal } from 'antd';

// == Import : local
import './footer.scss';

// == Composant
const Footer = ({
  modalAddTopicMobileVisible,
  modalChangeVisibleMobile,
  modalOnOkModalMobile,
  modalOnCancelMobile,
  setTimeoutStateMobile,
  user,
  isAuthenticated,
}) => {
  // ---------- MODAL --------------------------
  // Handler passer la modal d'ajout de topic en visible:
  const handleShowModal = (event) => {
    event.preventDefault();
    modalChangeVisibleMobile();
  };
  // Au moment de presser Ok dans la modal:
  const handleOnOkModal = (event) => {
    event.preventDefault();
    modalOnOkModalMobile();
    setTimeout(() => {
      setTimeoutStateMobile();
    }, 5000);
  };
  // Au moment de presser Cancel dans la modal:
  const handleOnCancelModal = () => {
    modalOnCancelMobile();
  };

  return (
    <div id="footer">
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <a href="" className="footer-content-left-addTopic" onClick={handleShowModal}>Ajouter un topic</a>
            <div className="footer-content-left-contacts">
              <NavLink
                exact
                to="/contact"
              >
                <div className="footer-content-left-contacts-contact" />
              </NavLink>
              <NavLink
                exact
                to="/developers"
              >
                <div className="footer-content-left-contacts-dev">dev</div>
              </NavLink>
              <NavLink
                exact
                to="/legal-notice"
              >
                <div className="footer-content-left-contacts-dislaimer">disclaimer</div>
              </NavLink>
              {isAuthenticated === true && user.status === 1 && (
                <NavLink
                  exact
                  to="/admin"
                >
                  <div className="footer-content-left-contacts-admin">admin</div>
                </NavLink>
              )}
            </div>
          </div>
          <div className="footer-content-right">
            <p className="footer-content-right-text">
              O'clock - 2019
            </p>
          </div>
        </div>
      </footer>
      <div id="modalAddTopicFooter">
        <Modal
          visible={modalAddTopicMobileVisible}
          onOk={handleOnOkModal}
          onCancel={handleOnCancelModal}
          closable={false}
          footer={false}
          width="90%"
          wrapClassName="modalAddTopicFooter"
        >
          <TopicCreationMobile />
        </Modal>
      </div>
    </div>
  );
};

Footer.propTypes = {
  modalAddTopicMobileVisible: PropTypes.bool.isRequired,
  modalChangeVisibleMobile: PropTypes.func.isRequired,
  modalOnOkModalMobile: PropTypes.func.isRequired,
  modalOnCancelMobile: PropTypes.func.isRequired,
  setTimeoutStateMobile: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

// == Export
export default Footer;
