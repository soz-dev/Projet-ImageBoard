// == Import : npm
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import : local
import './staticpost.scss';

// Import AntD
import { Dropdown, Modal, Popover } from 'antd';

// Imports Locaux:
import DropDownOptions from 'src/components/Main/Posts/DropDownOptions';
import Discussion from 'src/components/Main/Posts/Discussion';
import DiscussionCreation from 'src/containers/Main/Posts/DiscussionCreation';
import TestShareSocial from 'src/components/TestShareSocial';
import ModalImage from 'src/components/Main/Posts/ModalImage';

// Récupération de l'id du post dans l'url
const idPost = window.location.pathname.split('/').pop();

// ----------- COMPOSANT --------------------
class StaticPost extends React.Component {
  state = {
    SinglePostData: [],
    SinglePostDataDiscussion: [],
    SinglePostDataAuthor: '',
    openedModal: null,
  }

  componentDidMount() {
    this.getSinglePost();
  }

  getSinglePost = () => {
    axios.get(`http://localhost:3000/api/posts/${idPost}`)
      .then((response) => {
        this.setState({
          SinglePostData: response.data,
          SinglePostDataAuthor: response.data.author,
          SinglePostDataDiscussion: response.data.discussions,
        });
      });
  }

  openModal = (id) => {
    this.setState({ openedModal: id });
  };

  closeModal = () => {
    this.setState({ openedModal: null });
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

    const { postStatusComments, SinglePostDataDiscussion, SinglePostData, SinglePostDataAuthor, openedModal, LikeState } = this.state;

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
        id: SinglePostData._id,
        user,
        likes: SinglePostData.likes,
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

    // Dropdown Socials:
    const DropdownSocials = (<TestShareSocial postId={idPost} />);
    // Dropdown Options:
    const DropdownOptions = (<DropDownOptions postId={idPost} postAuthor={SinglePostData.author} />);

    const PostDataDiscussionId = SinglePostDataDiscussion.map(discussion => (discussion._id));

    // ------------------------------------------------------
    // ------------------------------------------------------

    return (
      <div id="static-posts">

        {/* ------------------------------------------------------------------------ */}

        <section className="posts">

          <NavLink exact to="/">
            <div className="posts-iconReturn">Retour Home</div>
          </NavLink>

          {/* ------------------- MAIN CONTENT POSTS ----------------------------- */}

          <div className="posts-global">
            <div className="posts-global-imageBox">
              <div className="posts-global-imageBox-div">

                {/* Modal Image ------ */}

                <img src={`http://localhost:3000/${SinglePostData.image}`} alt="" className="posts-global-imageBox-div-image" onClick={() => handlerOpenFullScreenImage(idPost)} />
                <Modal
                  visible={stateImageFullScreenVisible && (stateImageFullScreenVisibleId === idPost)}
                  onCancel={handlerCloseFullScreenImage}
                  maskClosable
                  footer={false}
                  width="100%"
                >
                  <ModalImage image={`http://localhost:3000/${SinglePostData.image}`} />
                </Modal>

                {/* --------- */}

              </div>
            </div>
            <div className="posts-global-content">
              <div className="posts-global-content-header">
                <div className="posts-global-content-header-titleOptions">
                  <div className="posts-global-content-header-titleOptions-nickname">
                    {SinglePostData.author}
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
                        <input name="id" type="hidden" value={idPost} />
                        <button type="submit" className="posts-global-content-header-titleOptions-optionsBox-likes" />
                      </form>
                      )}

                    {/* --------- */}

                    <div className="posts-global-content-header-titleOptions-optionsBox-divider" />

                    {/* Dropdown Options  */}

                    <Dropdown overlay={DropdownOptions} trigger={['click']} placement="bottomLeft">
                      <div className="posts-global-content-header-titleOptions-optionsBox-options" />
                    </Dropdown>

                    {/* --------- */}

                  </div>
                </div>
                <div className="posts-global-content-header-infos">
                  <div className="posts-global-content-header-infos-date">
                    {SinglePostData.creationDate}
                  </div>
                  <div className="posts-global-content-header-infos-likes">
                    <span className="posts-global-content-header-infos-likes-bold">
                      {SinglePostData.likes}
                    </span> likes
                  </div>
                </div>
              </div>

              {/* Change status when clicking on text to show all the content */}

              <p className="" id="posts-global-content-description">
                {SinglePostData.description}
              </p>

              {/* ----------- */}

              <div className="posts-global-content-footer">
                <div className="posts-global-content-footer-nbComments">
                  <p className="posts-global-content-footer-nbComments-text">
                    <span className="posts-global-content-footer-nbComments-text-bold">
                      {SinglePostDataDiscussion && SinglePostDataDiscussion.length}
                    </span> commentaires
                  </p>

                  {/* If no Discussions, the arrow is not displayed, and on click, open the discussions */}

                  {SinglePostDataDiscussion && SinglePostDataDiscussion.length > 0 && (
                    <div className="posts-global-content-footer-nbComments-openCommentsArrowDown" />
                  )}

                  {/* --------- */}

                </div>

                {/* Modal Ajouter un discussion ------ */}

                <div className="posts-global-content-footer-commentButton" onClick={() => handlerOpenAddDiscussion(idPost)} />
                <Modal
                  visible={stateAddDiscussion && (stateAddDiscussionId === idPost)}
                  onCancel={handlerCloseAddDiscussions}
                  closable={false}
                  maskClosable
                  footer={false}
                  width="100%"
                  className="modalAddDiscussion"
                >
                  <DiscussionCreation postId={idPost} />
                </Modal>

                {/* ---------- */}


              </div>
            </div>
          </div>

          {/* ------------------- PREVIEW OF DISCUSSIONS ----------------------------- */}

          {/* If no Discussions, the preview pannel will not appears */}

          {SinglePostDataDiscussion && SinglePostDataDiscussion.length > 0 && (

          <div className="posts-preview">

            <div className="posts-preview-allImages">
              <div className="posts-preview-allImages-oneBox">

                {/* Mapping all discussions datas, and on PopOver, Shows discussions comments */}

                {SinglePostDataDiscussion.map(discussion => (
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

          <Discussion key={SinglePostData._id} postId={SinglePostData._id} discussionId={PostDataDiscussionId} />

          {/* ---------- */}

        </section>

        {/* ------------------------------------------------------------------------ */}

        <div className="posts-divider" />

      </div>
    );
  }
}

StaticPost.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  modalOnOkModal: PropTypes.bool.isRequired,
  modalOnCancel: PropTypes.bool.isRequired,
  setTimeoutState: PropTypes.func.isRequired,
};

// == Export
export default StaticPost;
