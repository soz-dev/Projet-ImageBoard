// == Import : npm
import PropTypes from 'prop-types';
import React from 'react';
import {
  Icon, Input, message, Upload, Button,
} from 'antd';

// == Import : local
import './topiccreation.scss';
import axios from 'axios';

import { NavLink } from 'react-router-dom';

// == Composant
class TopicCreation extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  state = {
    selectFile: '',
    statusFile: false,
  }

  onChangeHandler= (info) => {
    // this.setState({
    //   selectFile: event.file.originFileObj,
    // });
    // const file = event.file.originFileObj;
    // const status = file;
    console.log(info.file);
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
      this.setState({
        selectFile: info.file.originFileObj,
        statusFile: true,
      });
    }
    else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }


  onClickHandler = () => {
    const data = new FormData();
    const { selectFile } = this.state;
    console.log(selectFile);
    const { inputValueDescription, user } = this.props;
    if (user.username !== undefined) {
      data.set('author', user.username);
    }
    data.set('description', inputValueDescription);
    data.append('file', selectFile);
    axios.post('http://localhost:3000/api/posts/addPost', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
      })
      .catch((err) => {
      });
  }

  render() {
    const {
      changeInputDescriptionImage,
      inputValueDescription,
      changeInputDescriptionPost,
      isAuthenticated,
      user,
    } = this.props;

    const { statusFile } = this.state;

    const changeHandlerText = (event) => {
      changeInputDescriptionPost(event.target.value);
    };

    const changeHandlerImage = (event) => {
      changeInputDescriptionImage(event.target.value);
    };

    const props = {
      name: 'file',
      multiple: false,
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
          // console.log(info.file);
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);
          this.onChangeHandler(info.file);
        }
        else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };

    const valueInput = this.inputRef.current;

    // if (statusFile === true && valueInput != nulle ) {
    //   return  <Button type="submit" className="topicCreation-footer-ok" onClick={this.onClickHandler}>Ok !</Button>
    // } else {
    //   <Button type="submit" disable className="topicCreation-footer-ok" onClick={this.onClickHandler}>Ok !</Button>
    // }

    return (
      <form className="topicCreation">
        <div className="topicCreation-header">Ajouter un&nbsp;
          <span className="topicCreation-header-trans">topic</span>&nbsp;:</div>
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
              ref={this.inputRef}
            />
          </div>
          <div className="topicCreation-content-dragger">
            {statusFile ? (
              <Upload.Dragger disabled {...props} onChange={this.onChangeHandler} className="topicCreation-content-dragger-element">
                <p className="ant-upload-drag-icon">
                  <Icon type="upload" />
                </p>
                <p className="ant-upload-text">Image Uploadée !</p>
                <p className="ant-upload-hint">
                Vous ne pouvez uploader qu'une image à la fois.
                </p>
              </Upload.Dragger>
            ) : (
              <Upload.Dragger {...props} onChange={this.onChangeHandler} className="topicCreation-content-dragger-element">
                <p className="ant-upload-drag-icon">
                  <Icon type="upload" />
                </p>
                <p className="ant-upload-text">Cliquez ou glissez/déposez ici.</p>
                <p className="ant-upload-hint">
                Vous ne pouvez uploader qu'une image à la fois.
                </p>
              </Upload.Dragger>
            )
          }
          </div>
          <div className="topicCreation-footer">
            <button type="submit" className="topicCreation-footer-cancel">Annuler</button>
            {(statusFile === false)
              ? <Button type="submit" disabled className="topicCreation-footer-ok">Ok !</Button>
              : <button type="submit" className="topicCreation-footer-ok" onClick={this.onClickHandler}>Ok !</button>
          }
          </div>
        </div>
      </form>
    );
  }
}
TopicCreation.propTypes = {
  inputValueImage: PropTypes.string.isRequired,
  changeInputDescriptionImage: PropTypes.func.isRequired,
  inputValueDescription: PropTypes.string.isRequired,
  changeInputDescriptionPost: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

export default TopicCreation;
