// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// Import Antd :
import {
  Input,
} from 'antd';

// == Import : local
import axios from 'axios';

// == Composant
const CommentUpdate = ({
  changeInputDescription,
  inputValueCommentDescription,
  commentId,
}) => {
  const clickHandlerUpdate = (event) => {
    event.preventDefault();
    const comment = {
      id: commentId,
      description: inputValueCommentDescription,
    };
    axios.post('http://localhost:3000/api/comments/updateComment', comment)
      .then((response) => {
        console.log(response.data);
        window.location.href = 'http://localhost:8080/';
      })
      .catch(() => {
        console.log('Une erreur s\'est produite');
      });
  };

  const changeHandlerText = (event) => {
    changeInputDescription(event.target.value);
  };

  return (
    <form method="post" onSubmit={clickHandlerUpdate} id="topicCreation">
      <div className="topicCreation">
        <div className="topicCreation-header">Modification <span className="topicCreation-header-trans">&nbsp;commentaire :</span></div>
        <div className="topicCreation-content">
          <div className="topicCreation-content-textArea">
            <input type="hidden" value={commentId} name="id" />
            <div className="topicCreation-content-textArea-header">Editer votre commentaire</div>
            <Input.TextArea
              onChange={changeHandlerText}
              value={inputValueCommentDescription}
              rows={5}
              placeholder="Allez-y, on vous écoute !"
              name="description"
            />
          </div>
        </div>
        <div className="topicCreation-footer">
          <button type="submit" className="topicCreation-footer-cancel">Annuler</button>
          <button type="submit" className="topicCreation-footer-ok">Ok !</button>
        </div>
      </div>
    </form>
  );
};

CommentUpdate.propTypes = {
  changeInputDescription: PropTypes.func.isRequired,
  inputValueCommentDescription: PropTypes.string.isRequired,
  commentId: PropTypes.string.isRequired,
};

// == Export
export default CommentUpdate;
