// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// Import Antd :
import {
  Input,
  Upload,
  Icon,
  message,
} from 'antd';

// == Import : local
import axios from 'axios';

// == Composant
const DiscussionUpdate = ({
  changeInputDescription,
  inputValueDiscussionDescription,
  discussionId,
  isAuthenticated,
  user,
}) => {
  const clickHandlerUpdate = (event) => {
    event.preventDefault();
    const discussion = {
      id: discussionId,
      description: inputValueDiscussionDescription,
    };
    axios.post('http://localhost:3000/api/discussions/updateDiscussion', discussion)
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
        <div className="topicCreation-header">Modification <span className="topicCreation-header-trans">&nbsp;discussion :</span></div>
        <div className="topicCreation-content">
          <div className="topicCreation-content-textArea">
            <input type="hidden" value={discussionId} name="id" />
            <div className="topicCreation-content-textArea-header">Editez votre commentaire</div>
            <Input.TextArea
              onChange={changeHandlerText}
              value={inputValueDiscussionDescription}
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

// == Export
export default DiscussionUpdate;
