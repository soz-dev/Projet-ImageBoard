// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// == Import : local
import './drawercontent.scss';

// Import Antd:
import {
  Form,
  Input,
  Button,
} from 'antd';

// ----------- COMPOSANT --------------------
class DrawerContent extends React.Component {
  state = {
    error: {},
  }

  render() {
    const {
      inputValueUserEmail,
      inputValueUserPassword,
      inputValueUserName,
      inputValueUserLastname,
      inputValueUserPseudo,
      changeInputUserEmail,
      changeInputUserPassword,
      changeInputUserName,
      changeInputUserLastname,
      changeInputUserPseudo,
      changeView,
    } = this.props;
    const { error } = this.state;

    const changeSubmitHandlerRegister = (event) => {
      event.preventDefault();
      const user = {
        email: inputValueUserEmail,
        password: inputValueUserPassword,
        firstname: inputValueUserName,
        lastname: inputValueUserLastname,
        username: inputValueUserPseudo,
      };
      axios.post('http://localhost:3000/api/users/addUser', user)
        .then((response) => {
          console.log(response.data);
          changeView();
        })
        .catch((err) => {
          this.setState({
            error: err.response.data,
          });
          console.log(err.response.data);
        });
    };

    const changeHandlerEmail = (event) => {
      changeInputUserEmail(event.target.value);
    };

    const changeHandlerPassword = (event) => {
      changeInputUserPassword(event.target.value);
    };

    const changeHandlerName = (event) => {
      changeInputUserName(event.target.value);
    };

    const changeHandlerLastname = (event) => {
      changeInputUserLastname(event.target.value);
    };

    const changeHandlerPseudo = (event) => {
      changeInputUserPseudo(event.target.value);
    };

    return (
      <div id="drawerContentInscription">
        <div className="drawerContentInscription">
          <div className="drawerContentInscription-boxes">
            <Form onSubmit={changeSubmitHandlerRegister} layout="vertical">
              <Form.Item>
                <Input
                  onChange={changeHandlerEmail}
                  value={inputValueUserEmail}
                  name="email"
                  type="email"
                  placeholder="E-Mail"
                  required
                />
                <p>{error.email}</p>
              </Form.Item>
              <Form.Item>
                <Input
                  onChange={changeHandlerPassword}
                  value={inputValueUserPassword}
                  name="password"
                  type="password"
                  placeholder="Votre mot de passe"
                  required
                />
                <p>{error.password}</p>
              </Form.Item>
              <Form.Item>
                <Input
                  onChange={changeHandlerName}
                  value={inputValueUserName}
                  name="firstname"
                  type="name"
                  placeholder="Prénom"
                  required
                />
                <p>{error.firstname}</p>
              </Form.Item>
              <Form.Item>
                <Input
                  onChange={changeHandlerLastname}
                  value={inputValueUserLastname}
                  name="lastname"
                  type="name"
                  placeholder="Nom"
                  required
                />
                <p>{error.lastname}</p>
              </Form.Item>
              <Form.Item>
                <Input
                  onChange={changeHandlerPseudo}
                  value={inputValueUserPseudo}
                  name="username"
                  type="name"
                  placeholder="Votre pseudonyme"
                  required
                />
                <p>{error.username}</p>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                INSCRIPTION
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="drawerContentInscription-connexion">
            <div className="drawerContentInscription-connexion-label">Vous avez déjà un compte ?</div>
            <div className="drawerContentInscription-connexion-div">
              <Button onClick={changeView}>CONNEXION</Button>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

DrawerContent.propTypes = {
  inputValueUserEmail: PropTypes.string.isRequired,
  inputValueUserPassword: PropTypes.string.isRequired,
  inputValueUserName: PropTypes.string.isRequired,
  inputValueUserLastname: PropTypes.string.isRequired,
  inputValueUserPseudo: PropTypes.string.isRequired,
  changeInputUserEmail: PropTypes.func.isRequired,
  changeInputUserPassword: PropTypes.func.isRequired,
  changeInputUserName: PropTypes.func.isRequired,
  changeInputUserLastname: PropTypes.func.isRequired,
  changeInputUserPseudo: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired,
};

// == Export
export default DrawerContent;
