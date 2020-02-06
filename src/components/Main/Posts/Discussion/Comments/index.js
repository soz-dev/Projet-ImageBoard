// == Import : npm
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Dropdown, Modal } from 'antd';

import DropDownOptionsComment from 'src/containers/Main/Posts/Discussion/Comments/DropDownOptionsComment';

import ModalImage from 'src/components/Main/Posts/ModalImage';

// == Import : local
import './comments.scss';

// == Composant
class Comments extends React.Component {
  state = {
    PostDataComment: [],
  }

  componentDidMount() {
    this.getSinglePost();
  }

  getSinglePost = () => {
    const { discussionId } = this.props;
    axios.get(`http://localhost:3000/api/discussions/${discussionId}`)
      .then((response) => {
        this.setState({
          PostDataComment: response.data.comments,
        });
      });
  }

  render() {
    const {
      openFullScreenImage,
      closeFullScreenImage,
      stateImageFullScreenVisible,
      stateImageFullScreenVisibleId,
    } = this.props;
    const { PostDataComment } = this.state;

    // Modal Image Fullscreen -------
    const handlerOpenFullScreenImage = (id) => {
      openFullScreenImage(id);
    };
    const handlerCloseFullScreenImage = () => {
      closeFullScreenImage();
    };
    
    return (
      <div id="comment">
        {PostDataComment.map(element => (
          <article className="comment">
            <div className="comment-main">
              <div className="comment-main-emptyDiv" />
              <div className="comment-main-imageBox">
                <img src={`http://localhost:3000/${element.image}`} alt="" id="comment-image" onClick={() => handlerOpenFullScreenImage(element._id)} />
                <Modal
                  visible={stateImageFullScreenVisible && (stateImageFullScreenVisibleId === element._id)}
                  onCancel={handlerCloseFullScreenImage}
                  maskClosable
                  footer={false}
                  width="100%"
                >
                  <ModalImage image={`http://localhost:3000/${element.image}`} />
                </Modal>
              </div>
              <div className="comment-main-content">
                <div className="comment-main-content-left">
                  <div className="comment-main-content-left-text">{element.description}</div>
                </div>
                <div className="comment-main-content-right">
                  <div className="comment-main-content-right-head">
                    <div className="comment-main-content-right-head-nickname">{element.author}</div>
                    <div className="comment-main-content-right-head-date">{element.creationDate}</div>
                  </div>
                  <div className="comment-main-content-right-bottom">
                    <div className="comment-main-content-right-bottom-options">
                      <Dropdown overlay={<DropDownOptionsComment author={element.author} commentId={element._id} />} trigger={['click']} placement="bottomLeft">
                        <div className="comment-main-content-right-bottom-options-moreOptions" />
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    );
  }
}

Comments.propTypes = {
  discussionId: PropTypes.string.isRequired,
};

// == Export
export default Comments;
