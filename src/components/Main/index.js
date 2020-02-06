// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// Import des components:
import Posts from 'src/containers/Main/Posts';
import ModalExplorer from 'src/containers/Main/ModalExplorer';

// == Import : local
import './main.scss';

// Import AndD:
import { Modal } from 'antd';

// == Composant
class Main extends React.Component {
  state = {
    catalogVisible: false,
  };

  // componentWillUnmount() {
  //   stateCatalogVisible;
  // }

  render() {
    const {
      postData,
      isAuthenticated,
    } = this.props;

    const { catalogVisible } = this.state;

    const handlerOpenCatalog = () => {
      this.setState({
        catalogVisible: true,
      });
    };
    const handlerCloseCatalog = () => {
      this.setState({
        catalogVisible: false,
      });
    };

    return (
      <div id="main">
        {isAuthenticated === true && (
          <div className="fonctionnalities">
            <div className="fonctionnalities-catalog" onClick={handlerOpenCatalog} />
            <Modal
              visible={catalogVisible}
              onCancel={handlerCloseCatalog}
              maskClosable
              footer={false}
              width="100%"
              closable={false}
              className="ModalExplorer"
            >
              <ModalExplorer />
            </Modal>
          </div>
        )}
        <div className="posts">
          {postData.map((posts) => {
            const { _id } = posts;
            return <Posts key={_id} {...posts} />;
          })}
        </div>
      </div>
    );
  }
}


Main.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  postData: PropTypes.arrayOf(PropTypes.shape({
    discussions: PropTypes.array.isRequired,
    creationDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    __v: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  })).isRequired,
};

// == Export
export default Main;
