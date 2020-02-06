// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import { Input } from 'antd';

import axios from 'axios';

// == Import : local
import './contact.scss';

// == Composant
const Contact = ({
  inputValueSubject,
  inputValueText,
  inputValueMail,
  changeInputValueSubject,
  changeInputValueText,
  changeInputValueMail,
  user,
  isAuthenticated,
}) => {
  const changeSubmitHandlerMail = (event) => {
    event.preventDefault();
    const mail = {
      subject: inputValueSubject,
      text: inputValueText,
      email: inputValueMail,
      from: user.email,
    };
    axios.post('http://localhost:3000/send-email', mail)
      .then((response) => {
        console.log(response.data);
      })
      .catch(() => {
        console.log('Une erreur s\'est produite');
      });
    window.location.href = 'http://localhost:8080/';
  };

  const changeHandlerSubject = (event) => {
    changeInputValueSubject(event.target.value);
  };

  const changeHandlerText = (event) => {
    changeInputValueText(event.target.value);
  };

  const changeHandlerMail = (event) => {
    changeInputValueMail(event.target.value);
  };

  return (
    <div id="contact">
      <div className="wrapper">
        <div className="wrapper-contact">
          <NavLink exact to="/">
            <div className="wrapper-contact-iconReturn">Retour Home</div>
          </NavLink>
          <div className="wrapper-contact-main">
            <div className="wrapper-contact-main-title">
              <h2 className="wrapper-contact-main-title-text">CONTACT SUPPORT</h2>
            </div>
            <div className="wrapper-contact-main-content">
              <form method="post" onSubmit={changeSubmitHandlerMail}>
                <h2 className="wrapper-contact-main-content-subject">Votre sujet :</h2>
                <div className="wrapper-contact-main-content-add">
                  {isAuthenticated === true && (
                    <input type="hidden" value={user.email} name="from" />
                  )}
                  {isAuthenticated === false && (
                    <Input
                      onChange={changeHandlerMail}
                      value={inputValueMail}
                      name="email"
                      type="email"
                      placeholder="Votre e-mail"
                      required
                      className="wrapper-contact-main-content-add-email"
                    />
                  )}
                  <Input
                    onChange={changeHandlerSubject}
                    value={inputValueSubject}
                    name="subject"
                    type="text"
                    placeholder="Titre de votre sujet"
                    required
                    className="wrapper-contact-main-content-add-subject"
                  />
                  <Input.TextArea
                    onChange={changeHandlerText}
                    value={inputValueText}
                    name="text"
                    type="text"
                    placeholder="Votre message"
                    className="wrapper-contact-main-content-add-addtext"
                    rows="5"
                    required
                  />
                  <div className="wrapper-contact-main-content-add-div">
                    <button type="submit" className="wrapper-contact-main-content-add-div-validate">ENVOYER</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  inputValueSubject: PropTypes.string.isRequired,
  inputValueText: PropTypes.string.isRequired,
  inputValueMail: PropTypes.string.isRequired,
  changeInputValueSubject: PropTypes.func.isRequired,
  changeInputValueText: PropTypes.func.isRequired,
  changeInputValueMail: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

// == Export
export default Contact;
