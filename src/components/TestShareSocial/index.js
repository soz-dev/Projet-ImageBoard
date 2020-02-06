
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved, import/extensions, import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

import {
  FacebookIcon,
  TwitterIcon,
  FacebookShareButton,
  TwitterShareButton,

} from 'react-share';

import './testShareSocial.scss';

class TestShareSocial extends React.Component {
  render() {
    const { postId } = this.props;
    const shareUrl = `http://www.oboard.fr/staticpost/post/${postId}`;
    const title = 'O\'Board';

    return (
      <div id="shareSocialMedia">
        <div className="shareSocialMedia">
          <div className="shareSocialMedia-facebook">
            <FacebookShareButton
              url={shareUrl}
              quote={title}
              className="shareSocialMedia-facebook-button"
            >
              <FacebookIcon
                size={32}
                round
              />
            </FacebookShareButton>
          </div>
          <div className="shareSocialMedia-twitter">
            <TwitterShareButton
              url={shareUrl}
              title={title}
              className="shareSocialMedia-twitter-button"
            >
              <TwitterIcon
                size={32}
                round
              />
            </TwitterShareButton>
          </div>
        </div>
      </div>
    );
  }
}

TestShareSocial.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default TestShareSocial;
