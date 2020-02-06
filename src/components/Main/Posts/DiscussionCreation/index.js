// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// Import Antd :
import {
  Icon, Input, message, Upload, Button,
} from 'antd';

// == Import : local
import './discussioncreation.scss';
import axios from 'axios';

// == Composant
class DiscussionCreation extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  state = {
    selectFile: '',
    statusFile: false,
  }

  onChangeHandler= (info) => {
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
    const { inputValueDescriptionDiscussion, user, postId } = this.props;
    data.append('file', selectFile);
    if (user.username !== undefined) {
      data.set('author', user.username);
    }
    data.set('description', inputValueDescriptionDiscussion);
    data.set('id', postId);
    axios.post('http://localhost:3000/api/discussions/addDiscussion', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
      });
  }

  render() {
    const {
      changeInputDescriptionDiscussion,
      inputValueDescriptionDiscussion,
      postId,
      isAuthenticated,
      user,
    } = this.props;

    const { statusFile } = this.state;
  
    const changeHandlerText = (event) => {
      changeInputDescriptionDiscussion(event.target.value);
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

    console.log(postId)

    return (
      <form className="discussionCreation">
        <div className="discussionCreation-header">Ajouter une <span className="discussionCreation-header-trans">discussion</span>:</div>
        <div className="discussionCreation-content">
          <div className="discussionCreation-content-textArea">
            {isAuthenticated === true && (
            <input type="hidden" value={user.username} name="author" />
            )}
            <div className="discussionCreation-content-textArea-header">Que voulez-vous raconter ?</div>
            <Input.TextArea
              onChange={changeHandlerText}
              value={inputValueDescriptionDiscussion}
              rows={5}
              className="discussionCreation-content-textArea-textArea"
              placeholder="Allez-y, on vous écoute !"
              name="description"
              ref={this.inputRef}
            />
          </div>
          <div className="discussionCreation-content-dragger">
            {statusFile ? (
              <Upload.Dragger disabled {...props} onChange={this.onChangeHandler} className="discussionCreation-content-dragger-element">
                <p className="ant-upload-drag-icon">
                  <Icon type="upload" />
                </p>
                <p className="ant-upload-text">Image Uploadée !</p>
                <p className="ant-upload-hint">
                Vous ne pouvez uploader qu'une image à la fois.
                </p>
              </Upload.Dragger>
            ) : (
              <Upload.Dragger {...props} onChange={this.onChangeHandler} className="discussionCreation-content-dragger-element">
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
          <div className="discussionCreation-footer">
            <button type="button" className="discussionCreation-footer-cancel">Annuler</button>
            {(statusFile === false)
              ? <Button type="submit" disabled className="discussionCreation-footer-ok">Ok !</Button>
              : <button type="submit" className="discussionCreation-footer-ok" onClick={this.onClickHandler}>Ok !</button>
          }
          </div>
        </div>
      </form>
    );
  }
}


DiscussionCreation.propTypes = {
  inputValueDescriptionDiscussion: PropTypes.string.isRequired,
  changeInputImageDiscussion: PropTypes.func.isRequired,
  inputValueImageDiscussion: PropTypes.string.isRequired,
  changeInputDescriptionDiscussion: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

// == Export
export default DiscussionCreation;
