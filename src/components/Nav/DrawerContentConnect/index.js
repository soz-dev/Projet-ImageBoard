/* eslint-disable camelcase */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// == Import : local
import './drawercontentconnect.scss';

// Import Antd:
import {
  Form,
  Input,
  Button,
} from 'antd';

import setAuthToken from 'src/setAuthToken';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

class DrawerContentConnect extends React.Component {
  state = {
    error: {},
  }

  render() {
    const {
      inputValueUserPassword,
      inputValueUserPseudo,
      changeInputUserPassword,
      changeInputUserPseudo,
      changeView,
      setCurrentUser,
    } = this.props;
    const { error } = this.state;

    const changeSubmitHandlerConnect = (event) => {
      event.preventDefault();
      const user = {
        password: inputValueUserPassword,
        username: inputValueUserPseudo,
      };
      axios.post('http://localhost:3000/api/authenticate', user)
        .then((response) => {
          const { token } = response.data;
          localStorage.setItem('jwtToken', token);
          setAuthToken(token);
          const decoded = jwt_decode(token);
          setCurrentUser(decoded);
          window.location.href = 'http://localhost:8080';
        })
        .catch((err) => {
          this.setState({
            error: err.response.data,
          });
          console.log(err.response.data);
        });
    };

    const changeHandlerPassword = (event) => {
      changeInputUserPassword(event.target.value);
    };

    const changeHandlerPseudo = (event) => {
      changeInputUserPseudo(event.target.value);
    };

    return (
      <div id="drawerContent">
        <div className="drawerContent">
          <div className="drawerContent-connexion">
            <div className="drawerContent-connexion-label">
            Déjà un compte ?
            </div>
            <div className="drawerContent-connexion-boxes">
              <Form onSubmit={changeSubmitHandlerConnect} layout="vertical">
                <Form.Item>
                  <Input
                    onChange={changeHandlerPseudo}
                    value={inputValueUserPseudo}
                    name="username"
                    type="name"
                    placeholder="Votre pseudonyme"
                    required
                    className="drawerContent-connexion-boxes-nickname"
                  />
                  <p>{error.username}</p>
                </Form.Item>
                <Form.Item>
                  <Input
                    onChange={changeHandlerPassword}
                    value={inputValueUserPassword}
                    name="password"
                    type="password"
                    placeholder="Votre mot de passe"
                    required
                    className="drawerContent-connexion-boxes-password"
                  />
                  <p>{error.password}</p>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                  CONNEXION
                  </Button>
                </Form.Item>
              </Form>
            </div>

            <div className="drawerContent-inscription">
              <div className="drawerContent-inscription-label">
            Vous n'avez pas de compte ?
              </div>
            </div>
            <div className="drawerContent-inscription-div">
              <Button onClick={changeView}>INSCRIPTION</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DrawerContentConnect.propTypes = {
  inputValueUserPassword: PropTypes.string.isRequired,
  inputValueUserPseudo: PropTypes.string.isRequired,
  changeInputUserPassword: PropTypes.func.isRequired,
  changeInputUserPseudo: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
};

// == Export
export default DrawerContentConnect;
