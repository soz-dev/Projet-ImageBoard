// == Import : npm
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Dropdown } from 'antd';

import DropDownOptionsComment from 'src/containers/Main/Posts/Discussion/Comments/DropDownOptionsComment';

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
    const { PostDataComment } = this.state;

    return (
      <div id="comments">
        {PostDataComment.map(comments => (
          <div className="comments">
            <div className="comments-global">
              <div className="comments-global-phone">
                <div className="dividerMainComment">
                Divider
                </div>
                <div className="comments-global-phone-main">
                  <div className="comments-global-phone-main-mainleft">
                    <a href="#" className="comments-global-phone-main-mainleft-dot">Dot</a>
                  </div>
                  <div className="comments-global-phone-main-mainright">
                    <div className="comments-global-phone-main-mainright-box">
                      <div className="comments-global-phone-main-mainright-box-image">
                        <img src={comments.image} alt="" id="comments-image" />
                      </div>
                      <div className="comments-global-phone-main-mainright-box-content">
                        <div className="comments-global-phone-main-mainright-box-content-top">
                          <div className="comments-global-phone-main-mainright-box-content-top-header">
                            <div className="comments-global-phone-main-mainright-box-content-top-header-nicknameLikes">
                              <div className="comments-global-phone-main-mainright-box-content-top-header-nicknameLikes-nickname">
                                {comments.author}
                              </div>
                              <div className="comments-global-phone-main-mainright-box-content-top-header-nicknameLikes-likes">
                                <a href="#" className="comments-global-phone-main-mainright-box-content-top-header-nicknameLikes-likes-like" id="post-like-item">Like</a>
                                <a href="#" className="comments-global-phone-main-mainright-box-content-top-header-nicknameLikes-likes-dislike" id="post-dislikes-item">Dislike</a>
                              </div>
                            </div>
                            <div className="comments-global-phone-main-mainright-box-content-top-header-infos">
                              <div className="comments-global-phone-main-mainright-box-content-top-header-infos-date">
                                {comments.creationDate}
                              </div>
                              <div className="comments-global-phone-main-mainright-box-content-top-header-infos-nbLikes">
                                132 likes
                              </div>
                            </div>
                          </div>
                          <div className="comments-global-phone-main-mainright-box-content-top-text">
                            {comments.description}
                          </div>
                          <Dropdown overlay={<DropDownOptionsComment author={comments.author} commentsId={comments._id} />} trigger={['click']} placement="bottomLeft">
                            <div className="comments-global-main-bottom-box-content-moreOptions" id="post-moreOptions">...</div>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
