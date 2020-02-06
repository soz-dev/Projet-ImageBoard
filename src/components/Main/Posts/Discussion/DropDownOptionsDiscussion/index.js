// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// Import Axios
import axios from 'axios';
import DiscussionUpdate from 'src/containers/Main/Posts/Discussion/DropDownOptionsDiscussion/DiscussionUpdate';

// Import React-Dom:
import { NavLink } from 'react-router-dom';
import { Modal } from 'antd';

// == Import : local
import './dropdownoptionscomment.scss';

// == Composant
const DropDownOptionsComment = ({
  discussionId,
  author,
  isAuthenticated,
  user,
  modalFormUpdateDiscussionVisible,
  modalChangeVisible,
  modalOnOkModal,
  modalOnCancel,
  setTimeoutState,
}) => {
  const clickHandlerDelete = (event) => {
    event.preventDefault();
    const discussion = {
      id: discussionId,
    };
    axios.post('http://localhost:3000/api/discussions/deleteDiscussion', discussion)
      .then((response) => {
        console.log(response.data);
        window.location.href = 'http://localhost:8080/';
      })
      .catch(() => {
        console.log('Une erreur s\'est produite');
      });
  };

  // ---------- MODAL --------------------------
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

  return (
    <div id="dropDownOptionsDiscussion">
      <div className="dropDownOptionsDiscussion">
        <NavLink exact to="/contact">
          <button type="submit" value="" className="dropDownOptionsDiscussion-report">Signaler un commentaire</button>
        </NavLink>
        {isAuthenticated === true && (user.username === author || user.status === 1) && (
          <div>
            <div onClick={handleShowModal} className="dropDownOptionsDiscussion-form-change">Modifier mon commentaire</div>
            <Modal
              visible={modalFormUpdateDiscussionVisible}
              onOk={handleOnOkModal}
              onCancel={handleOnCancelModal}
              closable={false}
              footer={false}
              className="modalChangeDescription"
            >
              <DiscussionUpdate discussionId={discussionId} />
            </Modal>
          </div>
        )}
        {isAuthenticated === true && (user.username === author || user.status === 1) && (
        <form onSubmit={clickHandlerDelete} method="post" className="dropDownOptionsDiscussion-form">
          <input name="id" type="hidden" value={discussionId} />
          <button type="submit" value="" className="dropDownOptionsDiscussion-form-delete">Supprimer ce commentaire</button>
        </form>
        )}
      </div>
    </div>
  );
};

DropDownOptionsComment.propTypes = {
  discussionId: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

// == Export
export default DropDownOptionsComment;
