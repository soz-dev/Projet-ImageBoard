// == Import : npm
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// Import du Components:
import Discussion from 'src/components/Main/Posts/Discussion';
import DiscussionCreation from 'src/containers/Main/Posts/DiscussionCreation';
import DropDownOptions from 'src/containers/Main/Posts/DropDownOptions';
import PopOverComment from 'src/components/Main/Posts/PopOverComment';
import TestShareSocial from 'src/components/TestShareSocial';
import ModalImage from 'src/components/Main/Posts/ModalImage';

import { NavLink } from 'react-router-dom';

// Import AntD
import { Dropdown, Popover, Modal } from 'antd';

// == Import : local
import './posts.scss';

// == Composant
class Posts extends React.Component {
  state = {
    openedModal: null,
    openedmodalImage: null,
    postStatusComments: {
      id: null,
      open: false,
    },
  }

  openModal = (id) => {
    this.setState({ openedModal: id });
  };

  openmodalImage = (id) => {
    this.setState({ openedmodalImage: id });
  };

  closemodalImage = () => {
    this.setState({ openedmodalImage: null });
  };

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

  closeModal = () => {
    this.setState({ openedModal: null });
  };

  render() {
    const {
      _id,
      description,
      image,
      author,
      likes,
      creationDate,
      discussions,
      postStatusTextDesktop,
      changePostStatusTextDesktop,
      changePostStatusComments,
      modalOnOkModal,
      modalOnCancel,
      setTimeoutState,
      isAuthenticated,
    } = this.props;

    const { openedModal, postStatusComments, openedmodalImage } = this.state;

    // Option du dropDown
    const DropdownOptions = (<DropDownOptions postId={_id} postAuthor={author} />);
    const DropdownSocials = (<TestShareSocial />);

    const handlerPostOnClick = () => {
      changePostStatusTextDesktop();
    };
    // console.log(postStatus);

    const handlerOpenComments = () => {
      changePostStatusComments();
    };

    // ---------- MODAL --------------------------
    // Handler passer la modal d'ajout de topic en visible:
    // Au moment de presser Ok dans la modal:
    const handleOnOkModal = (event) => {
      event.preventDefault();
      modalOnOkModal();
      setTimeout(() => {
        setTimeoutState();
      }, 5000);
    };
    // Au moment de presser Cancel dans la modal:
    const handleOnCancelModal = () => {
      modalOnCancel();
    };

    const clickHandler = (event) => {
      event.preventDefault();
      const post = {
        id: _id,
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

    const discussionDatas = discussions.map(discussion => (
      discussion
    ));

    // Popover des comments
    const openCommentPopOver = (<PopOverComment />);

    return (

      <div id="posts">
        <div className="posts">
          <article className="posts-global">

            {/* Repoonsive Mobile */}
            {/* <NavLink exact to="/details-discussion"> */}
            <div className="posts-global-phone">
              <div className="posts-global-phone-header">
                <div className="posts-global-phone-header-image">
                  <img src={image} alt="" id="post-image" onClick={() => this.openmodalImage(_id)} />
                  <Modal
                    visible={openedmodalImage === _id}
                    toggle={this.closeModal}
                    onOk={handleOnOkModal}
                    onCancel={handleOnCancelModal}
                    closable={false}
                    footer={false}
                    wrapClassName="modalAddDiscussion"
                    width="100%"
                  >
                    <ModalImage postId={_id} description={description} image={image} author={author} discussionDatas={discussionDatas} />
                  </Modal>
                </div>
                <div className="posts-global-phone-header-boxContent">
                  <div className="posts-global-phone-header-boxContent-nickname" id="post-author">{author}</div>
                  {/* Disparait en version tablette */}
                  <div className="posts-global-phone-header-boxContent-likesSocials">
                    <Dropdown overlay={DropdownSocials} trigger={['click']} placement="bottomRight">
                      <a href="#" className="posts-global-phone-header-boxContent-likesSocials-socials">Socials</a>
                    </Dropdown>
                    <a href="#" className="posts-global-phone-header-boxContent-likesSocials-like" id="post-like-item">Like</a>
                  </div>
                  {/* ------------------------------- */}
                  {/* Apparait en version tablette */}
                  <div className="posts-global-phone-header-boxContent-right">
                    <Dropdown overlay={DropdownSocials} trigger={['click']} placement="bottomRight">
                      <a href="#" className="posts-global-phone-header-boxContent-right-socials">Socials</a>
                    </Dropdown>
                    <div className="posts-global-phone-header-boxContent-right-likes">
                      <a href="#" className="posts-global-phone-header-boxContent-right-likes-like" id="post-like-item">Like</a>
                    </div>
                    <div id="separator4" />
                    <Dropdown overlay={DropdownOptions} trigger={['click']} placement="bottomLeft">
                      <a href="" className="posts-global-phone-header-boxContent-right-moreOptions" id="post-moreOptions">...</a>
                    </Dropdown>
                  </div>
                  {/* --------------------------- */}
                </div>
                <div className="posts-global-phone-header-boxContent-infos">
                  <div className="posts-global-phone-header-boxContent-infos-date" id="post-date">{creationDate}</div>
                  <div className="posts-global-phone-header-boxContent-infos-likes" id="post-nbLikes"><span className="posts-global-phone-header-boxContent-infos-likes-nb">92</span> likes</div>
                </div>
                <div id="separator1" />
              </div>
              <div className="posts-global-phone-description">
                <p className="posts-global-phone-description-text" id="post-text" onClick={handlerOpenComments}>
                  {description}
                </p>
                <div id="separator2" />
                <div id="separator3" />
                <div className="posts-global-phone-description-footer">
                  <div className="posts-global-phone-description-footer-preview">
                    <div className="posts-global-phone-description-footer-preview-box">
                      <div className="posts-global-phone-description-footer-preview-box-imageBox">
                        {discussionDatas.map(discussion => (
                          <img src={discussion.image} alt="" className="posts-global-phone-description-footer-preview-box-imageBox-image" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="posts-global-phone-description-footer-nbCommentsBox" id="post-nbCommentsBox">
                    <p className="posts-global-phone-description-footer-nbCommentsBox-text"><span className="posts-global-phone-description-footer-nbCommentsBox-text-nb">14</span> commentaires
                    </p>
                    {discussionDatas && discussionDatas.length > 0 && (
                    <div className={`posts-global-phone-description-footer-nbCommentsBox-arrow${postStatusComments.open ? '-open' : ''}`} onClick={() => this.openDiscussion(_id)}>Arrow Open</div>
                    )}
                  </div>
                  <div className="posts-global-phone-description-footer-comment" id="post-commentButton">Commenter</div>
                  <Dropdown overlay={DropdownOptions} trigger={['click']} placement="topCenter" width="150px">
                    <a href="" className="posts-global-phone-description-footer-moreOptions" id="post-moreOptions">...</a>
                  </Dropdown>
                </div>
              </div>
            </div>
            {/* </NavLink> */}
            {/* Reponsive Desktop */}
            {/* ----------------------------------------------------------------------- */}
            <div className="posts-global-desktop">
              <div className={`posts-global-desktop-responsive${postStatusTextDesktop ? '-open' : ''}`}>
                <div className="posts-global-desktop-responsive-image">
                  <img src={image} alt="" id="post-image" onClick={() => this.openmodalImage(_id)} />
                  <Modal
                    visible={openedmodalImage === _id}
                    toggle={this.closeModal}
                    onOk={handleOnOkModal}
                    onCancel={handleOnCancelModal}
                    closable={false}
                    footer={false}
                    width="100%"
                    wrapClassName="modalAddDiscussion"
                  >
                    <ModalImage postId={_id} description={description} author={author} discussionDatas={discussionDatas} image={image} />
                  </Modal>
                </div>
                <div className="posts-global-desktop-responsive-content">
                  <div className="posts-global-desktop-responsive-content-top">
                    <div className="posts-global-desktop-responsive-content-top-header">
                      <div className="posts-global-desktop-responsive-content-top-header-boxContent">
                        <div className="posts-global-desktop-responsive-content-top-header-boxContent-nickname" id="post-author">{author}</div>
                        <div className="posts-global-desktop-responsive-content-top-header-boxContent-right">
                          <Dropdown overlay={DropdownSocials} trigger={['click']} placement="bottomCenter">
                            <a href="#" className="posts-global-desktop-responsive-content-top-header-boxContent-right-likes-socials">Socials</a>
                          </Dropdown>
                          <div className="posts-global-desktop-responsive-content-top-header-boxContent-right-likes">
                            {isAuthenticated === true
                              && (
                              <form onSubmit={clickHandler} method="post" className="dropDownOptions-form">
                                <input name="id" type="hidden" value={_id} />
                                <button type="submit" className="posts-global-desktop-responsive-content-top-header-boxContent-right-likes-like" id="post-like-item">Like</button>
                              </form>
                              )}
                          </div>
                          <div id="separator4" />
                          <Dropdown overlay={DropdownOptions} trigger={['click']} placement="bottomLeft">
                            <a href="" className="posts-global-desktop-responsive-content-top-header-boxContent-right-moreOptions" id="post-moreOptions">...</a>
                          </Dropdown>
                        </div>
                      </div>
                      <div className="posts-global-desktop-responsive-content-top-header-boxContent-infos">
                        <div className="posts-global-desktop-responsive-content-top-header-boxContent-infos-date" id="post-date">{creationDate}</div>
                        <div className="posts-global-desktop-responsive-content-top-header-boxContent-infos-likes" id="post-nbLikes"><span className="posts-global-desktop-responsive-content-top-header-boxContent-infos-likes-nb">{likes}</span> likes</div>
                      </div>
                      <div id="separator1" />
                    </div>
                    <div className={`posts-global-desktop-responsive-content-top-description${postStatusTextDesktop ? '-open' : ''}`} id="post-text">
                      <div onClick={handlerPostOnClick}>
                        {description}
                      </div>
                    </div>
                  </div>
                  <div className="posts-global-desktop-responsive-content-bottom">
                    <div id="separator5" />
                    <div className="posts-global-desktop-responsive-content-bottom-elements">
                      <div className="posts-global-desktop-responsive-content-bottom-elements-nbComments" id="post-nbComments"><span className="posts-global-desktop-responsive-content-bottom-elements-nbComments-nb">{discussionDatas.length}</span> commentaires</div>
                      <NavLink
                        exact
                        to={`/staticpost/post/${_id}`}
                        target="_blank"
                        className="posts-global-desktop-responsive-content-bottom-elements-newPage"
                      >
                        <div>Ouvrir dans une nouvelles page</div>
                      </NavLink>
                      <div className="posts-global-desktop-responsive-content-bottom-elements-comment" id="post-commentButton">
                        <div className="posts-global-desktop-responsive-content-bottom-elements-comment-inside" onClick={() => this.openModal(_id)}>
                          <div className="posts-global-desktop-responsive-content-bottom-elements-comment-inside-logo" />
                          <div className="posts-global-desktop-responsive-content-bottom-elements-comment-inside-text">Commenter</div>
                          <div id="modalAddDiscussion">
                            <Modal
                              visible={openedModal === _id}
                              toggle={this.closeModal}
                              onOk={handleOnOkModal}
                              onCancel={handleOnCancelModal}
                              closable={false}
                              footer={false}
                              width="50%"
                              wrapClassName="modalAddDiscussion"
                            >
                              <DiscussionCreation postId={_id} />
                            </Modal>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {discussionDatas && discussionDatas.length > 0 && (
            <div className="posts-global-preview">
              <div className="posts-global-preview-box">
                <div className="posts-global-preview-box-imageBox">
                  {discussionDatas.map(discussion => (
                    <Popover
                      className="posts-global-preview-box-imageBox-popOver"
                      overlayClassName="posts-global-preview-box-imageBox-overlayClass"
                      content={(
                        <div className="posts-global-preview-box-imageBox-popOver-div">
                          <p className="posts-global-preview-box-imageBox-popOver-div-text">{discussion.description}</p>
                        </div>
                      )}
                    >
                      <img src={discussion.image} alt="" className="posts-global-preview-box-imageBox-image" />
                    </Popover>
                  ))}
                </div>
              </div>
            </div>
            )}
            {(postStatusComments.id === _id === true)
             && <Discussion key={creationDate} postId={_id} discussion={discussionDatas} />}
            {discussionDatas && discussionDatas.length > 0 && (
            <div className="posts-global-div">
              <Popover content={openCommentPopOver}>
                <div className={`posts-global-div-arrow${postStatusComments.open ? '-open' : ''}`} onClick={() => this.openDiscussion(_id)}>Arrow Open</div>
              </Popover>
            </div>
            )}
            <div className={`posts-global-phone-description-footer-nbCommentsBox-arrowTurnTop${postStatusComments.open ? '-open' : ''}`} onClick={() => this.closeDiscussion()}>Arrow Close</div>
          </article>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  _id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  postStatusTextDesktop: PropTypes.bool.isRequired,
  changePostStatusTextDesktop: PropTypes.func.isRequired,
  changePostStatusComments: PropTypes.func.isRequired,
  creationDate: PropTypes.string.isRequired,
  modalOnOkModal: PropTypes.func.isRequired,
  modalOnCancel: PropTypes.func.isRequired,
  setTimeoutState: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  discussions: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    creationDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  })).isRequired,
};

// == Export
export default Posts;
