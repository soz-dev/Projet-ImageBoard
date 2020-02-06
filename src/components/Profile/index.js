// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// eslint-disable-next-line import/no-extraneous-dependencies
import { should } from 'chai';

import {
  Modal,
  Input,
  Form,
  Collapse,
  Popconfirm,
  Icon,
} from 'antd';

import UpdateIcon from 'src/containers/Profile/UpdateIcon';

import setAuthToken from 'src/setAuthToken';

import './profile.scss';

// == Composant
class Profile extends React.Component {
  state = {
    userData: [],
    error: {},
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
      modalAddIconVisible,
      setCurrentUser,
      modalChangeVisible,
      modalOnOkModal,
      modalOnCancel,
      setTimeoutState,
      inputValuePseudo,
      inputValueMail,
      inputValuePassword,
      inputValueDescription,
      changeInputUpdatePseudo,
      changeInputUpdateMail,
      changeInputUpdatePassword,
      changeInputUpdateDescription,
    } = this.props;
    const { userData, error } = this.state;

    const handleSubmitDelete = (event) => {
      event.preventDefault();
      const profile = {
        id: userData.id,
      };
      axios.post('http://localhost:3000/api/users/deleteUser', profile)
        .then((response) => {
          localStorage.removeItem('jwtToken');
          setAuthToken(false);
          setCurrentUser({});
          window.location.href = 'http://localhost:8080/';
          console.log(response.data);
        })
        .catch(() => {
          console.log('Une erreur s\'est produite');
        });
    };


    const handleSubmitLogout = () => {
      localStorage.removeItem('jwtToken');
      setAuthToken(false);
      setCurrentUser({});
      window.location.href = 'http://localhost:8080/';
    };

    const changeHandlerPseudo = (event) => {
      changeInputUpdatePseudo(event.target.value);
    };

    const handleSubmitPseudo = (event) => {
      event.preventDefault();
      const profile = {
        id: userData.id,
        username: inputValuePseudo,
      };
      axios.post('http://localhost:3000/api/users/updateUserUsername', profile)
        .then((response) => {
          window.location.href = 'http://localhost:8080/profile';
          console.log(response.data);
        })
        .catch((err) => {
          this.setState({
            error: err.response.data,
          });
          console.log(err.response.data);
        });
    };

    const changeHandlerMail = (event) => {
      changeInputUpdateMail(event.target.value);
    };

    const handleSubmitMail = (event) => {
      event.preventDefault();
      const profile = {
        id: userData.id,
        email: inputValueMail,
      };
      axios.post('http://localhost:3000/api/users/updateUserEmail', profile)
        .then((response) => {
          window.location.href = 'http://localhost:8080/profile';
          console.log(response.data);
        })
        .catch((err) => {
          this.setState({
            error: err.response.data,
          });
          console.log('Une erreur s\'est produite');
        });
    };

    const changeHandlerPassword = (event) => {
      changeInputUpdatePassword(event.target.value);
    };

    const handleSubmitPassword = (event) => {
      event.preventDefault();
      const profile = {
        id: userData.id,
        password: inputValuePassword,
      };
      axios.post('http://localhost:3000/api/users/updateUserPassword', profile)
        .then((response) => {
          window.location.href = 'http://localhost:8080/profile';
          console.log(response.data);
        })
        .catch((err) => {
          this.setState({
            error: err.response.data,
          });
          console.log(err.response.data);
        });
    };

    const changeHandlerDescription = (event) => {
      changeInputUpdateDescription(event.target.value);
    };

    const handleSubmitDescription = (event) => {
      event.preventDefault();
      const profile = {
        id: userData.id,
        description: inputValueDescription,
      };
      axios.post('http://localhost:3000/api/users/updateUserDescription', profile)
        .then((response) => {
          window.location.href = 'http://localhost:8080/profile';
          console.log(response.data);
        })
        .catch(() => {
          console.log('Une erreur s\'est produite');
        });
    };
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

    return (
      <div id="profile">
        <div className="profile">
          <div className="profile-title">
            <h1 className="profile-title-child">Bienvenue sur votre espace personnel <br />
              <span className="profile-title-child-name">{userData.username}</span>
            </h1>
          </div>
          <div className="profile-avatar">
            <div className="profile-avatar-block">
              <div className="profile-avatar-block-change" onClick={handleShowModal} />
              <Modal
                visible={modalAddIconVisible}
                onOk={handleOnOkModal}
                onCancel={handleOnCancelModal}
                footer={false}
                closable={false}
                width="90%"
                className="modalAddAvatar"
              >
                <UpdateIcon userId={userData.id} />
              </Modal>
              { userData.iconImage !== 'public/profile_plain.svg' && (
              <img className="profile-avatar-change-block-image" src={`http://localhost:3000/${userData.iconImage}`} onClick={handleShowModal} alt="icone" />)}
              {userData.iconImage === 'public/profile_plain.svg' && (
              <img className="profile-avatar-change-block-image" src="/src/materials/icones/profile_icone_empty.svg" onClick={handleShowModal} alt="icone" />)}
            </div>
          </div>
          <div className="profile-divider" />
          <div className="profile-description">
            <div className="profile-description-label">Votre description :</div>
            <div className="profile-description-text">{userData.description}</div>
          </div>
          <div className="profile-divider" />
          <div className="profile-parameters">
            <div className="profile-parameters-info">Vos changements seront effectifs à votre prochaine connexion</div>
            <Collapse className="profile-parameters-collapse">
              <Collapse.Panel header="Paramètres" className="profile-parameters-collapse-panel">
                <Form className="profile-update" method="post" onSubmit={handleSubmitPseudo}>
                  <div className="profile-parameters-collapse-panel-box">
                    <div className="profile-parameters-collapse-panel-box-label">Changer votre nom d'utilisateur :</div>
                    <Input
                      onChange={changeHandlerPseudo}
                      value={inputValuePseudo}
                      rows={5}
                      placeholder={userData.username}
                      name="username"
                      type="text"
                      required
                    />
                  </div>
                  <p>{error.username}</p>
                </Form>
                <Form className="profile-update" method="post" onSubmit={handleSubmitMail}>
                  <div className="profile-parameters-collapse-panel-box">
                    <div className="profile-parameters-collapse-panel-box-label">Changer votre email :</div>
                    <Input
                      onChange={changeHandlerMail}
                      value={inputValueMail}
                      rows={5}
                      placeholder={userData.email}
                      name="email"
                      type="mail"
                      required
                    />
                  </div>
                  <p>{error.email}</p>
                </Form>
                <Form className="profile-update" method="post" onSubmit={handleSubmitPassword}>
                  <div className="profile-parameters-collapse-panel-box">
                    <div className="profile-parameters-collapse-panel-box-label">Changer votre mot de passe :</div>
                    <Input
                      onChange={changeHandlerPassword}
                      value={inputValuePassword}
                      rows={5}
                      placeholder="Nouveau mot de passe"
                      name="password"
                      type="password"
                      required
                    />
                  </div>
                  <p>{error.password}</p>
                </Form>
                <Form className="profile-update" method="post" onSubmit={handleSubmitDescription}>
                  <div className="profile-parameters-collapse-panel-box">
                    <div className="profile-parameters-collapse-panel-box-label">Changer votre description :</div>
                    <Input
                      onChange={changeHandlerDescription}
                      value={inputValueDescription}
                      rows={5}
                      placeholder="Votre description"
                      type="text"
                      name="description"
                    />
                  </div>
                </Form>
              </Collapse.Panel>
            </Collapse>
          </div>
          <div className="profile-footer">
            <Popconfirm
              title="Voulez-vous supprimer votre compte ?"
              icon={<span />}
              onConfirm={
                  handleSubmitDelete
                }
              okText={<div className="profile-footer-popDelete-confirm">C'est sûr !</div>}
              onCancel="Annuler"
              className="profile-footer-popDelete"
            >
              <a href="#" className="profile-footer-delete">
              !
              </a>
            </Popconfirm>
            <button onClick={handleSubmitLogout} type="submit" className="profile-footer-deconnexion">
              Deconnexion
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  modalAddIconVisible: PropTypes.bool.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
  modalChangeVisible: PropTypes.func.isRequired,
  modalOnOkModal: PropTypes.func.isRequired,
  modalOnCancel: PropTypes.func.isRequired,
  setTimeoutState: PropTypes.func.isRequired,
  inputValuePseudo: PropTypes.string.isRequired,
  inputValueMail: PropTypes.string.isRequired,
  inputValueDescription: PropTypes.string.isRequired,
  inputValuePassword: PropTypes.string.isRequired,
  changeInputUpdatePassword: PropTypes.func.isRequired,
  changeInputUpdatePseudo: PropTypes.func.isRequired,
  changeInputUpdateMail: PropTypes.func.isRequired,
  changeInputUpdateDescription: PropTypes.func.isRequired,
};

// == Export
export default Profile;
