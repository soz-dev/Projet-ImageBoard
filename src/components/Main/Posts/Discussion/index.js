// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// Import Components:
import Comments from 'src/containers/Main/Posts/Discussion/Comments';
import DropDownOptionsDiscussion from 'src/containers/Main/Posts/Discussion/DropDownOptionsDiscussion';
import CommentCreation from 'src/containers/Main/Posts/Discussion/CommentCreation';
import { Dropdown, Modal, Popover } from 'antd';
import ModalImage from 'src/components/Main/Posts/ModalImage';

// == Import : local
import './discussion.scss';

// ------------------------------- COMPOSANT ---------------------------------------------------
// ---------------------------------------------------------------------------------------------

class Discussion extends React.Component {
  // -------- LOCAL STATE ------------
  state = {
    openedModal: null,
    PostDataDiscussion: [],
    PostDataComment: [],
    postStatusComments: {
      id: null,
      open: false,
    },
  }

  // Get Data from one post -------
  componentDidMount() {
    this.getSinglePost();
    this.getSinglePostComment();
  }

  getSinglePost = () => {
    const { postId } = this.props;
    axios.get(`http://localhost:3000/api/posts/${postId}`)
      .then((response) => {
        this.setState({
          PostDataDiscussion: response.data.discussions,
        });
      });
  };

  getSinglePostComment = () => {
    const { discussionId } = this.props;
    axios.get(`http://localhost:3000/api/discussions/${discussionId}`)
      .then((response) => {
        // console.log(response.data.comments);
        this.setState({
          PostDataComment: response.data.comments,
        });
      });
  }

  openModal = (id) => {
    this.setState({ openedModal: id });
  };

  closeModal = () => {
    this.setState({ openedModal: null });
  };

  // Open Comment pannel -------------
  openComment = (id) => {
    console.log(id);
    this.setState({
      postStatusComments: {
        id,
        open: true,
      },
    });
  };

  closeComment = () => {
    this.setState({
      postStatusComments: {
        id: null,
        open: false,
      },
    });
  };

  // ------------------------------- RENDER -----------------------------------------------------
  // ---------------------------------------------------------------------------------------------

  render() {
    const {
      openFullScreenImage,
      closeFullScreenImage,
      stateImageFullScreenVisible,
      stateImageFullScreenVisibleId,
    } = this.props;
    const { postId, discussionId } = this.props;
    const {
      openedModal, PostDataDiscussion, PostDataComment, postStatusComments,
    } = this.state;


    // Modal Image Fullscreen -------
    const handlerOpenFullScreenImage = (id) => {
      openFullScreenImage(id);
    };
    const handlerCloseFullScreenImage = () => {
      closeFullScreenImage();
    };

    // ------------------------------------------------------
    // ------------------------------------------------------

    console.log(PostDataComment);

    return (
      <div id="discussion">
        {PostDataDiscussion.map(element => (
          <article className="discussion">
            <div className="discussion-main">
              <div className="discussion-main-emptyDiv" />
              <div className="discussion-main-imageBox">
                <img src={`http://localhost:3000/${element.image}`} alt="" id="discussion-image" onClick={() => handlerOpenFullScreenImage(element._id)} />
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
              <div className="discussion-main-content">
                <div className="discussion-main-content-left">
                  <div className="discussion-main-content-left-text">{element.description}</div>
                  <div className="discussion-main-content-left-commentBox">
                    {PostDataComment && element.comments.length > 0 && (
                    <div className={`discussion-main-content-left-commentBox-arrowMobile${postStatusComments.open && postStatusComments.id === element._id ? '-open' : ''}`} onClick={() => this.openComment(element._id)} />
                    )}
                    <p className="discussion-main-content-left-commentBox-text">
                      <span className="discussion-main-content-left-commentBox-text-transform">{element.comments.length}</span> commentaires
                    </p>
                  </div>
                </div>
                <div className="discussion-main-content-right">
                  <div className="discussion-main-content-right-head">
                    <div className="discussion-main-content-right-head-nickname">{element.author}</div>
                    <div className="discussion-main-content-right-head-date">{element.creationDate}</div>
                  </div>
                  <div className="discussion-main-content-right-middle">
                    <div onClick={() => this.openModal(element._id)} className="discussion-main-content-right-middle-comment" />
                  </div>
                  <Modal
                    key={element.creationDate}
                    visible={openedModal === element._id}
                    onCancel={this.closeModal}
                    footer={false}
                    width="100%"
                    wrapClassName="modalAddComment"
                  >
                    <CommentCreation key={element.creationDate} postId={postId} discussionId={element._id} />
                  </Modal>
                  <div className="discussion-main-content-right-bottom">
                    <div className="discussion-main-content-right-bottom-options">
                      <Dropdown overlay={<DropDownOptionsDiscussion key={element.creationDate} author={element.author} discussionId={element._id} />} trigger={['click']} placement="bottomLeft">
                        <div className="discussion-main-content-right-bottom-options-moreOptions" />
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* {PostDataComment && element.comments.length > 0 && (
            <div className="discussion-preview">
              <div className="discussion-preview-box">
                <div className="discussion-preview-box-imageBox">
                  {PostDataComment.map(comment => (
                    <React.Fragment key={comment._id}>
                      <Popover
                        className="discussion-preview-box-imageBox-popOver"
                        overlayClassName="discussion-preview-box-imageBox-overlayClass"
                        content={(
                          <div className="discussion-preview-box-imageBox-popOver-div">
                            <p className="discussion-preview-box-imageBox-popOver-div-text">{comment.description}</p>
                          </div>
                      )}
                      >
                        <img src={comment.image} alt="" />
                      </Popover>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            )} */}
            {postStatusComments.open === true && postStatusComments.id === element._id
            && <Comments key={element.creationDate} discussionId={element._id} />}
            <div className={`discussion-arrowUpBox${postStatusComments.open && postStatusComments.id === element._id ? '-open' : ''}`} onClick={() => this.closeComment()} >
              <div className="discussion-arrowUpBox-open-arrow" />
            </div>
          </article>
        ))}
      </div>
    );
  }
}

// ------------------------------------------------------
// ------------------------------------------------------

//  ------------ PROPTYPES -------------------
Discussion.propTypes = {
  postId: PropTypes.string.isRequired,
  openFullScreenImage: PropTypes.func.isRequired,
  closeFullScreenImage: PropTypes.func.isRequired,
  openFullScreenImagePreview: PropTypes.func.isRequired,
  closeFullScreenImagePreview: PropTypes.func.isRequired,
  stateImageFullScreenVisible: PropTypes.bool.isRequired,
  stateImageFullScreenPreview: PropTypes.bool.isRequired,
  stateImageFullScreenVisibleId: PropTypes.string,
  discussionId: PropTypes.array.isRequired,
};

Discussion.defaultProps = {
  stateImageFullScreenVisibleId: null,
};

//  ------------ EXPORT-------------------
export default Discussion;
