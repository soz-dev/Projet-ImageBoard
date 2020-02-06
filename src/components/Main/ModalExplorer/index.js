// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// == Import : local
import './modalexplorer.scss';

// Import React-Dom
import { NavLink } from 'react-router-dom';


// == Composant
class ModalExplorer extends React.Component {
  state = {
    getPostsInformations: [],
  }

  componentDidMount() {
    this.postsData();
  }

  postsData = () => {
    axios.get('http://localhost:3000/api/posts')
      .then((response) => {
        this.setState({
          getPostsInformations: response.data,
        });
      });
  };

  render() {
    const { getPostsInformations } = this.state;

    return (
      <div id="modalEplorer">
        <div className="modalExplorer">
          <div className="modalExplorer-header">
            <div className="modalExplorer-header-title">Catalogue :</div>
          </div>
          <div className="modalExplorer-div">
            {getPostsInformations.map(data => (
              <div className="modalExplorer-div-boxes">
                <NavLink
                  exact
                  to={`/staticpost/post/${data._id}`}
                  target="_blank"
                  className="modalExplorer-box-boxes"
                >
                  <img src={`http://localhost:3000/${data.image}`} alt="" className="modalExplorer-box-image" />
                </NavLink>
              </div>
            ))}
          </div>
        </div>

      </div>
    );
  }
}

ModalExplorer.propTypes = {
};

// == Export
export default ModalExplorer;
