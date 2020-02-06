// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

// Import Antd :
import {
  Icon, message, Upload,
} from 'antd';

// == Import : local
import axios from 'axios';

import './updateicon.scss';

// == Composant
class UdpateIcon extends React.Component {
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
    const { userId } = this.props;
    data.append('file', selectFile);
    data.set('id', userId);
    axios.post('http://localhost:3000/api/users/updateUserIconImage', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        window.location.reload();
      })
      .catch((err) => {
      });
  }

  render() {
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

    return (
      <div id="udpateIcon">
        <div className="updateIcon">
          <div className="updateIcon-title">Voulez-vous changer d'avatar ?</div>
          <div className="updateIcon-uploadBox">
            <Upload.Dragger {...props} onChange={this.onChangeHandler}>
              <p className="ant-upload-drag-icon">
                <Icon type="upload" />
              </p>
              <p className="ant-upload-text">Cliquez ou glissez/déposez ici.</p>
              <p className="ant-upload-hint">
             Vous ne pouvez uploader qu'une image à la fois.
              </p>
            </Upload.Dragger>
          </div>
          <div className="updateIcon-footer">
            <button type="submit" className="updateIcon-footer-cancel">Annuler</button>
            <NavLink exact to="/profile">
              <button type="submit" onClick={this.onClickHandler} className="updateIcon-footer-ok">Ok !</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}


UdpateIcon.propTypes = {
  userId: PropTypes.string.isRequired,
};

// == Export
export default UdpateIcon;
