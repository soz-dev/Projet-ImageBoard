// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// Import Antd :
import {
  Input,
  Upload,
  Icon,
} from 'antd';

// == Import : local
import './topiccreation.scss';
import axios from 'axios';

// == Composant
const TopicCreation = ({
  inputValueImage,
  changeInputDescriptionImage,
  inputValueDescription,
  changeInputDescriptionPost,
  isAuthenticated,
  user,
}) => {
  const changeSubmitHandler = (event) => {
    event.preventDefault();
    const posts = {
      author: user.username,
      image: inputValueImage,
      description: inputValueDescription,
    };
    axios.post('http://localhost:3000/api/posts/addPost', posts)
      .then((response) => {
        console.log(response.data);
        window.location.href = 'http://localhost:8080/';
      })
      .catch(() => {
        console.log('Une erreur s\'est produite');
      });
  };

  const changeHandlerText = (event) => {
    changeInputDescriptionPost(event.target.value);
  };

  const changeHandlerImage = (event) => {
    changeInputDescriptionImage(event.target.value);
  };

  return (
    <form method="post" onSubmit={changeSubmitHandler} id="topicCreation">
      <div className="topicCreation">
        <div className="topicCreation-header">Ajouter un topic :</div>
        <div className="topicCreation-content">
          <div className="topicCreation-content-textArea">
            {isAuthenticated === true && (
            <input type="hidden" value={user.username} name="author" />
            )}
            <div className="topicCreation-content-textArea-header">Que voulez-vous raconter ?</div>
            <Input.TextArea
              onChange={changeHandlerText}
              value={inputValueDescription}
              rows={5}
              className="topicCreation-content-textArea-textArea"
              placeholder="Allez-y, on vous écoute !"
              name="description"
            />
          </div>
          <div className="topicCreation-content-upload">
            <div className="topicCreation-content-upload-header">Votre image :</div>
            <div className="topicCreation-content-upload-header-sub">Vous pouvez l'importer ici :</div>
            <Upload.Dragger className="topicCreation-content-upload-dragger">
              <p className="ant-upload-drag-icon">
                <Icon type="upload" rotate="180" style={{ color: 'black' }} />
              </p>
              <p className="ant-upload-text">Cliquez ici pour importer, ou glissez-déposez votre image</p>
            </Upload.Dragger>
            <div className="topicCreation-content-upload-header-sub">Ou vous pouvez coller le lien de l'image ici :</div>
            <Input
              onChange={changeHandlerImage}
              value={inputValueImage}
              rows={5}
              className="topicCreation-content-upload"
              placeholder="Le lien de votre image"
              name="image"
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

TopicCreation.propTypes = {
  inputValueDescription: PropTypes.string.isRequired,
  changeInputDescriptionPost: PropTypes.func.isRequired,
  inputValueImage: PropTypes.string.isRequired,
  changeInputDescriptionImage: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

// == Export
export default TopicCreation;
