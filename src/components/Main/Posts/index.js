// == Import : npm
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// Import du Components:
import Discussion from 'src/containers/Main/Posts/Discussion';
import DiscussionCreation from 'src/containers/Main/Posts/DiscussionCreation';
import DropDownOptions from 'src/containers/Main/Posts/DropDownOptions';
import TestShareSocial from 'src/components/TestShareSocial';
import ModalImage from 'src/components/Main/Posts/ModalImage';

// Import React-Dom
import { NavLink } from 'react-router-dom';

// Import AndD:
import { Dropdown, Popover, Modal } from 'antd';

// Import Locaux
import './posts.scss';

// ------------------------------- COMPOSANT ---------------------------------------------------
// ---------------------------------------------------------------------------------------------

class Posts extends React.Component {
  // -------- LOCAL STATE ------------
  state = {
    postStatusComments: {
      id: null,
      open: false,
    },
    PostDataDiscussion: [],
    LikeState: false,
  }

  // Get Data from one post -------
  componentDidMount() {
    this.getSinglePost();
  }

  getSinglePost = () => {
    const { _id } = this.props;
    axios.get(`http://localhost:3000/api/posts/${_id}`)
      .then((response) => {
        this.setState({
          PostDataDiscussion: response.data.discussions,
        });
      });
  }

  // Open Discussion pannel -------------
  openDiscussion = (id) => {
    this.setState({
      postStatusComments: {
        id,
        open: true,
      },
    });
  };

  closeDiscussion = () => {
    this.setState({
      postStatusComments: {
        id: null,
        open: false,
      },
    });
  };

  setStateLike = () => {
    this.setStateLike({
      LikeState: true,
    });
  }

  // ------------------------------- RENDER -----------------------------------------------------
  // ---------------------------------------------------------------------------------------------

  render() {
    const {
      // ------ Props -------
      _id,
      description,
      image,
      author,
      likes,
      userLikes,
      creationDate,
      user,
      // ------- Methods ------
      postStatusTextDesktop,
      changePostStatusTextDesktop,
      isAuthenticated,
      openFullScreenImage,
      closeFullScreenImage,
      openAddDiscussion,
      closeAddDiscussion,
      openFullScreenImagePreview,
      closeFullScreenImagePreview,
      // ------- State --------
      stateImageFullScreenVisible,
      stateImageFullScreenVisibleId,
      stateAddDiscussion,
      stateAddDiscussionId,
      stateImageFullScreenPreview,
      stateImageFullScreenPreviewId,
    } = this.props;

    const { postStatusComments, PostDataDiscussion, LikeState } = this.state;

    // ------------------------------- METHODS -----------------------------------------------------
    // ---------------------------------------------------------------------------------------------

    // Modal Image Fullscreen -------
    const handlerOpenFullScreenImage = (id) => {
      openFullScreenImage(id);
    };
    const handlerCloseFullScreenImage = () => {
      closeFullScreenImage();
    };

    // Modal Image Preview ---------
    const handlerOpenFullScreenImagePreview = (id) => {
      openFullScreenImagePreview(id);
    };
    const handlerCloseFullScreenImagePreview = () => {
      closeFullScreenImagePreview();
    };

    // Modal Add Discussion ---------
    const handlerOpenAddDiscussion = (id) => {
      openAddDiscussion(id);
    };
    const handlerCloseAddDiscussions = () => {
      closeAddDiscussion();
    };

    // Add Like ------------
    const clickHandlerAddLike = (event) => {
      event.preventDefault();
      const post = {
        id: _id,
        user,
        likes,
      };
      axios.post('http://localhost:3000/api/posts/addLikes', post)
        .then((response) => {
          console.log(response.data);
          window.location.href = 'http://localhost:8080/';
        })
        .catch(() => {
          console.log('Une erreur s\'est produite');
        });
    };

    // Change status when clicking on text to show all the content
    const handlerPostOnClick = () => {
      changePostStatusTextDesktop();
    };

    // Dropdown Socials:
    const DropdownSocials = (<TestShareSocial postId={_id} />);
    // Dropdown Options:
    const DropdownOptions = (<DropDownOptions postId={_id} postAuthor={author} />);

    const PostDataDiscussionId = PostDataDiscussion.map(discussion => (discussion._id));

    // ------------------------------------------------------
    // ------------------------------------------------------

    console.log(userLikes);

    return (
      <div id="posts">

        {/* ------------------------------------------------------------------------ */}

        <section className="posts">

          {/* ------------------- MAIN CONTENT POSTS ----------------------------- */}

          <div className="posts-global">
            <div className="posts-global-imageBox">
              <div className="posts-global-imageBox-div">

                {/* Modal Image ------ */}

                <img src={`http://localhost:3000/${image}`} alt="" className="posts-global-imageBox-div-image" onClick={() => handlerOpenFullScreenImage(_id)} />
                <NavLink
                  exact
                  to={`/staticpost/post/${_id}`}
                  target="_blank"
                  className="posts-global-imageBox-div-changePage"
                />
                <Modal
                  visible={stateImageFullScreenVisible && (stateImageFullScreenVisibleId === _id)}
                  onCancel={handlerCloseFullScreenImage}
                  maskClosable
                  footer={false}
                  width="100%"
                >
                  <ModalImage image={`http://localhost:3000/${image}`} />
                </Modal>

                {/* --------- */}

              </div>
            </div>
            <div className="posts-global-content">
              <div className="posts-global-content-header">
                <div className="posts-global-content-header-titleOptions">
                  <div className="posts-global-content-header-titleOptions-nickname">
                    {author}
                  </div>
                  <div className="posts-global-content-header-titleOptions-optionsBox">

                    {/* Dropdown Socials  */}

                    <Dropdown overlay={DropdownSocials} trigger={['click']} placement="bottomRight">
                      <div className="posts-global-content-header-titleOptions-optionsBox-socials" />
                    </Dropdown>

                    {/* --------- */}

                    {/* Add Like  */}

                    {isAuthenticated === true
                      && (
                      <form onSubmit={clickHandlerAddLike} method="post">
                        <input name="id" type="hidden" value={_id} />
                        {((userLikes.indexOf(user.id) > -1)
                          ? <button type="submit" className="posts-global-content-header-titleOptions-optionsBox-likes" />
                          : <button type="submit" className="posts-global-content-header-titleOptions-optionsBox-likesPlain" />
                        )}
                      </form>
                      )}

                    {/* --------- */}

                    <div className="posts-global-content-header-titleOptions-optionsBox-divider" />

                    {/* Dropdown Options  */}

                    <Dropdown overlay={DropdownOptions} trigger={['click']} placement="bottomRight">
                      <div className="posts-global-content-header-titleOptions-optionsBox-options" />
                    </Dropdown>

                    {/* --------- */}

                  </div>
                </div>
                <div className="posts-global-content-header-infos">
                  <div className="posts-global-content-header-infos-date">
                    {creationDate}
                  </div>
                  <div className="posts-global-content-header-infos-likes">
                    <span className="posts-global-content-header-infos-likes-bold">
                      {likes}
                    </span> likes
                  </div>
                </div>
              </div>

              {/* Change status when clicking on text to show all the content */}

              <p className={`posts-global-content-description${postStatusTextDesktop ? '-open' : ''}`} onClick={handlerPostOnClick}>
                {description}
              </p>

              {/* ----------- */}

              <div className="posts-global-content-footer">
                <div className="posts-global-content-footer-nbComments">
                  <p className="posts-global-content-footer-nbComments-text">
                    <span className="posts-global-content-footer-nbComments-text-bold">
                      {PostDataDiscussion && PostDataDiscussion.length}
                    </span> commentaires
                  </p>

                  {/* If no Discussions, the arrow is not displayed, and on click, open the discussions */}

                  {PostDataDiscussion && PostDataDiscussion.length > 0 && (
                    <div className={`posts-global-content-footer-nbComments-openCommentsArrowDown${postStatusComments.open ? '-open' : ''}`} onClick={() => this.openDiscussion(_id)} />
                  )}

                  {/* --------- */}

                </div>

                {/* Modal Ajouter un discussion ------ */}

                <div className="posts-global-content-footer-commentButton" onClick={() => handlerOpenAddDiscussion(_id)} />
                <Modal
                  visible={stateAddDiscussion && (stateAddDiscussionId === _id)}
                  onCancel={handlerCloseAddDiscussions}
                  closable={false}
                  maskClosable
                  footer={false}
                  width="100%"
                  className="modalAddDiscussion"
                >
                  <DiscussionCreation postId={_id} />
                </Modal>

                {/* ---------- */}


              </div>
            </div>
          </div>

          {/* ------------------- PREVIEW OF DISCUSSIONS -----------------------------

          {/* If no Discussions, the preview pannel will not appears */}

          {PostDataDiscussion && PostDataDiscussion.length > 0 && (

          <div className="posts-preview">

            <div className="posts-preview-allImages">
              <div className="posts-preview-allImages-oneBox">

                {/* Mapping all discussions datas, and on PopOver, Shows discussions comments */}

                {PostDataDiscussion.map(discussion => (
                  <React.Fragment key={discussion._id}>
                    <Popover
                      className="posts-preview-allImages-oneBox-popOver"
                      overlayClassName="posts-preview-allImages-oneBox-overlayClass"
                      content={(
                        <div className="posts-preview-allImages-oneBox-popOver-div">
                          <p className="posts-preview-allImages-oneBox-popOver-div-text">{discussion.description}</p>
                        </div>
                      )}
                    >
                      <img src={`http://localhost:3000/${discussion.image}`} alt="" className="preview-allImages-oneBox-image" onClick={() => handlerOpenFullScreenImagePreview(discussion._id)} />
                    </Popover>
                    <Modal
                      visible={stateImageFullScreenPreview && (stateImageFullScreenPreviewId === discussion._id)}
                      onCancel={handlerCloseFullScreenImagePreview}
                      maskClosable
                      footer={false}
                      width="100%"
                    >
                      <ModalImage image={`http://localhost:3000/${discussion.image}`} />
                    </Modal>
                  </React.Fragment>

                ))}

              </div>
            </div>


          </div>
          )}

          {/* ------------------------------------------ */}

          {/* ---------------------------- DISCUSSIONS ------------------------------ */}

          {(postStatusComments.id === _id === true)
             && <Discussion key={_id} postId={_id} discussionId={PostDataDiscussionId} />}

          {/* When Discussion OPEN, Arrow appears oriented up */}

          <div className={`posts-arrowUp${postStatusComments.open ? '-open' : ''}`} onClick={() => this.closeDiscussion()} />

          {/* ---------- */}

        </section>

        {/* ------------------------------------------------------------------------ */}

        <div className="posts-divider" />

      </div>
    );
  }
}

// -------------------------------------------
//  ------------ PROPTYPES -------------------

Posts.propTypes = {
  _id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  postStatusTextDesktop: PropTypes.bool.isRequired,
  changePostStatusTextDesktop: PropTypes.func.isRequired,
  creationDate: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  openFullScreenImage: PropTypes.func.isRequired,
  closeFullScreenImage: PropTypes.func.isRequired,
  stateImageFullScreenVisible: PropTypes.bool.isRequired,
  stateImageFullScreenVisibleId: PropTypes.string,
  openAddDiscussion: PropTypes.func.isRequired,
  closeAddDiscussion: PropTypes.func.isRequired,
  stateAddDiscussion: PropTypes.bool.isRequired,
  stateAddDiscussionId: PropTypes.string,
};

Posts.defaultProps = {
  stateImageFullScreenVisibleId: null,
  stateAddDiscussionId: null,
};

//  ------------ EXPORT-------------------

export default Posts;
