// == Import : npm
import React from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';

// == Import : local
import './admin.scss';


class Admin extends React.Component {
  state = {
    userData: [],
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios.get('http://localhost:3000/api/users')
      .then((response) => {
        this.setState({
          userData: response.data,
        });
      });
  }

  render() {
    const { inputValueId, changeInputDeleteUser } = this.props;
    const { userData } = this.state;

    const handleSubmitDelete = (event) => {
      event.preventDefault();
      const profile = {
        id: inputValueId,
      };
      axios.post('http://localhost:3000/api/users/deleteUser', profile)
        .then((response) => {
          // window.location.href = 'http://localhost:8080/';
          console.log(response.data);
        })
        .catch(() => {
          console.log('Une erreur s\'est produite');
        });
    };

    const changeHandlerDeleteUser = (event) => {
      changeInputDeleteUser(event.target.value);
    };

    return (
      <div id="admin">
        <div className="wrapper-admin">
          <NavLink exact to="/">
            <div className="wrapper-admin-iconReturn">Retour Home</div>
          </NavLink>
          <div className="wrapper-admin-title">
            <h1 className="wrapper-admin-title-child">Panel Admin</h1>
          </div>
          {userData.map(user => (
            <div className="wrapper-admin-content">
              <div className="wrapper-admin-content-title">
                <h1 className="wrapper-admin-content-title-child">
                  {user.username}
                </h1>
              </div>
              <div className="wrapper-admin-content-list">
                <ul className="wrapper-admin-content-list-items">
                  <li className="wrapper-admin-content-list-items-item">{user.iconImage}</li>
                  <li className="wrapper-admin-content-list-items-item">{user.description}</li>
                  <li className="wrapper-admin-content-list-items-item">{user.status}</li>
                  <li className="wrapper-admin-content-list-items-item">{user.privilege}</li>
                  <li className="wrapper-admin-content-list-items-item">{user.reputation}</li>
                  <li className="wrapper-admin-content-list-items-item">{user._id}</li>
                  <li className="wrapper-admin-content-list-items-item">{user.email}</li>
                  <li className="wrapper-admin-content-list-items-item">{user.firstname}</li>
                  <li className="wrapper-admin-content-list-items-item">{user.lastname}</li>
                  <li className="wrapper-admin-content-list-items-item">{user.creationDate}</li>
                </ul>
              </div>
              <div className="wrapper-admin-content-buttons">
                <a href="#" className="wrapper-admin-content-buttons-contact">Contact</a>
                <a href="#" className="wrapper-admin-content-buttons-history">History</a>
                <form onSubmit={handleSubmitDelete}>
                  <input className="wrapper-admin-content-buttons-delete" type="text" name="id" onChange={changeHandlerDeleteUser} value={inputValueId} autoComplete="Off" placeholder="Supprimer un utilisateur" />
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}


export default Admin;
