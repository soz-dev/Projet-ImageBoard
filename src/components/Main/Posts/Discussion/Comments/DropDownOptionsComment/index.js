// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// Import Axios
import axios from 'axios';

// Import React-Dom:
import { NavLink } from 'react-router-dom';
import { Modal } from 'antd';

import CommentUpdate from 'src/containers/Main/Posts/Discussion/Comments/DropDownOptionsComment/CommentUpdate';

// == Import : local
import './dropdownoptionscomment.scss';

// == Composant
const DropDownOptionsComment = ({
  commentId,
  author,
  isAuthenticated,
  user,
  modalFormUpdateCommentVisible,
  modalChangeVisible,
  modalOnOkModal,
  modalOnCancel,
  setTimeoutState,
}) => {
  const clickHandlerDelete = (event) => {
    event.preventDefault();
    const comment = {
      id: commentId,
    };
    axios.post('http://localhost:3000/api/comments/deleteComment', comment)
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
    <div id="dropDownOptionsComment">
      <div className="dropDownOptionsComment">
        <NavLink exact to="/contact">
          <button type="submit" value="" className="dropDownOptionsComment-report">Signaler un commentaire</button>
        </NavLink>
        {isAuthenticated === true && (user.username === author || user.status === 1) && (
          <div>
            <div onClick={handleShowModal} className="dropDownOptionsComment-form-change">Modifier mon commentaire</div>
            <Modal
              visible={modalFormUpdateCommentVisible}
              onOk={handleOnOkModal}
              onCancel={handleOnCancelModal}
              closable={false}
              footer={false}
              className="modalChangeCommentDescription"
            >
              <CommentUpdate commentId={commentId} />
            </Modal>
          </div>
        )}
        {isAuthenticated === true && (user.username === author || user.status === 1) && (
        <form onSubmit={clickHandlerDelete} method="post" className="dropDownOptionsComment-form">
          <input name="id" type="hidden" value={commentId} />
          <button type="submit" value="" className="dropDownOptionsComment-form-delete">Supprimer ce commentaire</button>
        </form>
        )}
      </div>
    </div>
  );
};

DropDownOptionsComment.propTypes = {
  commentId: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  modalFormUpdateCommentVisible: PropTypes.bool.isRequired,
  modalChangeVisible: PropTypes.func.isRequired,
  modalOnOkModal: PropTypes.bool.isRequired,
  modalOnCancel: PropTypes.bool.isRequired,
  setTimeoutState: PropTypes.func.isRequired,
};

// == Export
export default DropDownOptionsComment;
