import isEmpty from '../../server/validation/is-empty';

// == Initial State
const initialState = {
  // Modal d'ajout de topic;
  modalFormAddTopic: {
    visible: false,
    confirmLoading: false,
  },
  modalFormAddTopicMobile: {
    visible: false,
    confirmLoading: false,
  },
  // Modal d'ajout d'une discussion';
  modalFormAddDiscussion: {
    visible: false,
    confirmLoading: false,
  },
  modalFormAddDiscussionMobile: {
    visible: false,
    confirmLoading: false,
  },
  // Modal d'update d'une discussion';
  modalFormUpdateDiscussion: {
    visible: false,
    confirmLoading: false,
  },
  modalFormUpdateComment: {
    visible: false,
    confirmLoading: false,
  },
  // Modal d'ajout d'une icone
  modalFormAddIcon: {
    visible: false,
    confirmLoading: false,
  },
  postData: [],
  // Cascade du post:
  postTextStatus: {
    comments: false,
    desktop: false,
  },
  // Input Post
  inputValuePostDescription: '',
  inputValuePostImage: '',
  // Input Discussion
  inputValueDiscussionDescription: '',
  inputValueDiscussionImage: '',
  inputValueDiscussionDescriptionUpdate: '',
  // Input Comments
  inputValueCommentDescription: '',
  inputValueCommentImage: '',
  inputValueCommentDescriptionUpdate: '',
  // Drawer User:
  showDrawerUser: false,
  // Drawer Menu Burger:
  showDrawerMenuBurger: false,
  // Input User
  inputValueUserEmail: '',
  inputValueUserPassword: '',
  inputValueUserName: '',
  inputValueUserLastname: '',
  inputValueUserPseudo: '',
  view: false,
  // Connected User
  isAuthenticated: false,
  user: {},
  // Input User
  inputValueIcon: '',
  inputValuePseudo: '',
  inputValueMail: '',
  inputValueDescription: '',
  inputValuePassword: '',
};

// -------------------------------------------------------------------------------
// --------------- MODAL ADD TOPIC ------------
const MODAL_CHANGE_VISIBLE = 'MODAL_CHANGE_VISIBLE';
const MODAL_ON_OK = 'MODAL_ON_OK';
const MODAL_ON_CANCEL = 'MODAL_ON_CANCEL';
const SET_TIMEOUT_STATE = 'SET_TIMEOUT_STATE';
// Mobile:
const MODAL_CHANGE_VISIBLE_MOBILE = 'MODAL_CHANGE_VISIBLE_MOBILE';
const MODAL_ON_OK_MOBILE = 'MODAL_ON_OK_MOBILE';
const MODAL_ON_CANCEL_MOBILE = 'MODAL_ON_CANCEL_MOBILE';
const SET_TIMEOUT_STATE_MOBILE = 'SET_TIMEOUT_STATE_MOBILE';

// --------------- MODAL ADD DISCUSSION ------------
const MODAL_CHANGE_VISIBLE_DISCUSSION = 'MODAL_CHANGE_VISIBLE_DISCUSSION';
const MODAL_ON_OK_DISCUSSION = 'MODAL_ON_OK_DISCUSSION';
const MODAL_ON_CANCEL_DISCUSSION = 'MODAL_ON_CANCEL_DISCUSSION';
const SET_TIMEOUT_STATE_DISCUSSION = 'SET_TIMEOUT_STATE_DISCUSSION';
// Mobile:
const MODAL_CHANGE_VISIBLE_MOBILE_DISCUSSION = 'MODAL_CHANGE_VISIBLE_MOBILE_DISCUSSION';
const MODAL_ON_OK_MOBILE_DISCUSSION = 'MODAL_ON_OK_MOBILE_DISCUSSION';
const MODAL_ON_CANCEL_MOBILE_DISCUSSION = 'MODAL_ON_CANCEL_MOBILE_DISCUSSION';
const SET_TIMEOUT_STATE_MOBILE_DISCUSSION = 'SET_TIMEOUT_STATE_MOBILE_DISCUSSION';

// --------------- MODAL UPDATE DISCUSSION -----------------
const MODAL_CHANGE_VISIBLE_DISCUSSION_UPDATE = 'MODAL_CHANGE_VISIBLE_DISCUSSION_UPDATE';
const MODAL_ON_OK_DISCUSSION_UPDATE = 'MODAL_ON_OK_DISCUSSION_UPDATE';
const MODAL_ON_CANCEL_DISCUSSION_UPDATE = 'MODAL_ON_CANCEL_DISCUSSION_UPDATE';
const SET_TIMEOUT_STATE_DISCUSSION_UPDATE = 'SET_TIMEOUT_STATE_DISCUSSION_UPDATE';

const MODAL_CHANGE_VISIBLE_COMMENT_UPDATE = 'MODAL_CHANGE_VISIBLE_COMMENT_UPDATE';
const MODAL_ON_OK_COMMENT_UPDATE = 'MODAL_ON_OK_COMMENT_UPDATE';
const MODAL_ON_CANCEL_COMMENT_UPDATE = 'MODAL_ON_CANCEL_COMMENT_UPDATE';
const SET_TIMEOUT_STATE_COMMENT_UPDATE = 'SET_TIMEOUT_STATE_COMMENT_UPDATE';

// --------------- MODAL UPDATE ICON ------------
const MODAL_CHANGE_VISIBLE_USER = 'MODAL_CHANGE_VISIBLE_USER';
const MODAL_ON_OK_USER = 'MODAL_ON_OK_USER';
const MODAL_ON_CANCEL_USER = 'MODAL_ON_CANCEL_USER';
const SET_TIMEOUT_STATE_USER = 'SET_TIMEOUT_STATE_USER';
const CHANGE_INPUT_UPDATE_ICON = 'CHANGE_INPUT_UPDATE_ICON';
const CHANGE_INPUT_UPDATE_PSEUDO = 'CHANGE_INPUT_UPDATE_PSEUDO';
const CHANGE_INPUT_UPDATE_MAIL = 'CHANGE_INPUT_UPDATE_MAIL';
const CHANGE_INPUT_UPDATE_DESCRIPTION = 'CHANGE_INPUT_UPDATE_DESCRIPTION';
const CHANGE_INPUT_UPDATE_PASSWORD = 'CHANGE_INPUT_UPDATE_PASSWORD';

//------------------------
// Connexion Axios:
export const FETCH_POSTS = 'FETCH_POSTS';
export const ADD_POSTS = 'ADD_POSTS';
const RECEIVE_POSTS = 'RECEIVE_POSTS';
const CHANGE_INPUT_DESCRIPTION_POST = 'CHANGE_INPUT_DESCRIPTION_POST';
const CHANGE_INPUT_DESCRIPTION_IMAGE = 'CHANGE_INPUT_DESCRIPTION_IMAGE';
const CHANGE_INPUT_DESCRIPTION_DISCUSSION = 'CHANGE_INPUT_DESCRIPTION_DISCUSSION';
const CHANGE_INPUT_IMAGE_DISCUSSION = 'CHANGE_INPUT_IMAGE_DISCUSSION';
const CHANGE_INPUT_DESCRIPTION_DISCUSSION_UPDATE = 'CHANGE_INPUT_DESCRIPTION_DISCUSSION_UPDATE';
const CHANGE_INPUT_USER_EMAIL = 'CHANGE_INPUT_USER_EMAIL';
const CHANGE_INPUT_USER_PASSWORD = 'CHANGE_INPUT_USER_PASSWORD';
const CHANGE_INPUT_USER_NAME = 'CHANGE_INPUT_USER_NAME';
const CHANGE_INPUT_USER_LASTNAME = 'CHANGE_INPUT_USER_LASTNAME';
const CHANGE_INPUT_USER_PSEUDO = 'CHANGE_INPUT_USER_PSEUDO';
const CHANGE_INPUT_DESCRIPTION_COMMENTS = 'CHANGE_INPUT_DESCRIPTION_COMMENTS';
const CHANGE_INPUT_IMAGE_COMMENTS = 'CHANGE_INPUT_IMAGE_COMMENTS';
const CHANGE_INPUT_DESCRIPTION_COMMENTS_UPDATE = 'CHANGE_INPUT_DESCRIPTION_COMMENTS_UPDATE';

// Affichage posts au click
const CHANGE_POST_TEXT_STATUS_DESKTOP = 'CHANGE_POST_TEXT_STATUS_DESKTOP';
const CHANGE_POST_STATUS_COMMENTS = 'CHANGE_POST_STATUS_COMMENTS';

// Affichage du Drawer user
const DRAWER_CHANGE_VISIBLE = 'DRAWER_CHANGE_VISIBLE';
const CLOSE_DRAWER = 'CLOSE_DRAWER';
const CHANGE_VIEW = 'CHANGE_VIEW';

// Affichage du Drawer Menu Burger
const DRAWER_BURGER_CHANGE_VISIBLE = 'DRAWER_BURGER_CHANGE_VISIBLE';
const CLOSE_DRAWER_BURGER = 'CLOSE_DRAWER_BURGER';
const CHANGE_VIEW_DRAWER_BURGER = 'CHANGE_VIEW_DRAWER_BURGER';


// Connected user
const SET_CURRENT_USER = 'SET_CURRENT_USER';

//-----------------------------------------------------------------------------------
// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // ------------ MODAL TOPIC -----------------
    case MODAL_CHANGE_VISIBLE:
      return {
        ...state,
        modalFormAddTopic: {
          visible: true,
        },
      };
    case MODAL_CHANGE_VISIBLE_MOBILE:
      return {
        ...state,
        modalFormAddTopicMobile: {
          visible: true,
        },
      };
    case MODAL_ON_OK:
      return {
        ...state,
        modalFormAddTopic: {
          visible: false,
          confirmLoading: true,
        },
      };
    case MODAL_ON_OK_MOBILE:
      return {
        ...state,
        modalFormAddTopicMobile: {
          visible: false,
          confirmLoading: true,
        },
      };
    case MODAL_ON_CANCEL:
      return {
        ...state,
        modalFormAddTopic: {
          visible: false,
        },
      };
    case MODAL_ON_CANCEL_MOBILE:
      return {
        ...state,
        modalFormAddTopicMobile: {
          visible: false,
        },
      };
    case SET_TIMEOUT_STATE:
      return {
        ...state,
        modalFormAddTopic: {
          visible: false,
          confirmLoading: false,
        },
      };
    case SET_TIMEOUT_STATE_MOBILE:
      return {
        ...state,
        modalFormAddTopicMobile: {
          visible: false,
          confirmLoading: false,
        },
      };
    // ------------ MODAL DISCUSSION -----------------
    case MODAL_CHANGE_VISIBLE_DISCUSSION:
      return {
        ...state,
        modalFormAddDiscussion: {
          visible: true,
        },
      };
    case MODAL_CHANGE_VISIBLE_MOBILE_DISCUSSION:
      return {
        ...state,
        modalFormAddDiscussionMobile: {
          visible: true,
        },
      };
    case MODAL_ON_OK_DISCUSSION:
      return {
        ...state,
        modalFormAddDiscussion: {
          visible: false,
          confirmLoading: true,
        },
      };
    case MODAL_ON_OK_MOBILE_DISCUSSION:
      return {
        ...state,
        modalFormAddDiscussionMobile: {
          visible: false,
          confirmLoading: true,
        },
      };
    case MODAL_ON_CANCEL_DISCUSSION:
      return {
        ...state,
        modalFormAddDiscussion: {
          visible: false,
        },
      };
    case MODAL_ON_CANCEL_MOBILE_DISCUSSION:
      return {
        ...state,
        modalFormAddDiscussionMobile: {
          visible: false,
        },
      };
    case SET_TIMEOUT_STATE_DISCUSSION:
      return {
        ...state,
        modalFormAddDiscussion: {
          visible: false,
          confirmLoading: false,
        },
      };
    case SET_TIMEOUT_STATE_MOBILE_DISCUSSION:
      return {
        ...state,
        modalFormAddDiscussionMobile: {
          visible: false,
          confirmLoading: false,
        },
      };
    // MODAL UPDATE DISCUSSION
    case MODAL_CHANGE_VISIBLE_DISCUSSION_UPDATE:
      return {
        ...state,
        modalFormUpdateDiscussion: {
          visible: true,
        },
      };
    case MODAL_ON_OK_DISCUSSION_UPDATE:
      return {
        ...state,
        modalFormUpdateDiscussion: {
          visible: false,
          confirmLoading: true,
        },
      };
    case MODAL_ON_CANCEL_DISCUSSION_UPDATE:
      return {
        ...state,
        modalFormUpdateDiscussion: {
          visible: false,
        },
      };
    case SET_TIMEOUT_STATE_DISCUSSION_UPDATE:
      return {
        ...state,
        modalFormUpdateDiscussion: {
          visible: false,
          confirmLoading: false,
        },
      };
    // MODAL UPDATE DISCUSSION
    case MODAL_CHANGE_VISIBLE_COMMENT_UPDATE:
      return {
        ...state,
        modalFormUpdateComment: {
          visible: true,
        },
      };
    case MODAL_ON_OK_COMMENT_UPDATE:
      return {
        ...state,
        modalFormUpdateComment: {
          visible: false,
          confirmLoading: true,
        },
      };
    case MODAL_ON_CANCEL_COMMENT_UPDATE:
      return {
        ...state,
        modalFormUpdateComment: {
          visible: false,
        },
      };
    case SET_TIMEOUT_STATE_COMMENT_UPDATE:
      return {
        ...state,
        modalFormUpdateComment: {
          visible: false,
          confirmLoading: false,
        },
      };

    // ---------- DRAWER USER ----------
    case DRAWER_CHANGE_VISIBLE:
      return {
        ...state,
        showDrawerUser: true,
      };
    case CLOSE_DRAWER:
      return {
        ...state,
        showDrawerUser: false,
      };
    case CHANGE_VIEW:
      return {
        ...state,
        view: !state.view,
      };

    // ---------- DRAWER MENU BURGER----------
    case DRAWER_BURGER_CHANGE_VISIBLE:
      return {
        ...state,
        showDrawerMenuBurger: true,
      };
    case CLOSE_DRAWER_BURGER:
      return {
        ...state,
        showDrawerMenuBurger: false,
      };
    case CHANGE_VIEW_DRAWER_BURGER:
      return {
        ...state,
        view: !state.view,
      };

    // ---------- CONNECTION USER ----------
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case CHANGE_POST_TEXT_STATUS_DESKTOP: {
      const { desktop: prevStatus } = state.postTextStatus;
      state.postTextStatus.desktop = !prevStatus;
      return {
        ...state,
      };
    }
    case CHANGE_POST_STATUS_COMMENTS: {
      const { comments: prevStatus } = state.postTextStatus;
      state.postTextStatus.comments = !prevStatus;
      return {
        ...state,
      };
    }
    // ---------- CHANGE VALUE POST ----------
    case RECEIVE_POSTS: {
      return {
        ...state,
        postData: action.postData,
      };
    }
    case CHANGE_INPUT_DESCRIPTION_POST:
      return {
        ...state,
        inputValuePostDescription: action.inputValue,
      };
    case CHANGE_INPUT_DESCRIPTION_IMAGE:
      return {
        ...state,
        inputValuePostImage: action.inputValue,
      };
    // ---------- CHANGE VALUE DISCUSSION ----------
    case CHANGE_INPUT_DESCRIPTION_DISCUSSION:
      return {
        ...state,
        inputValueDiscussionDescription: action.inputValue,
      };
    case CHANGE_INPUT_IMAGE_DISCUSSION:
      return {
        ...state,
        inputValueDiscussionImage: action.inputValue,
      };
    case CHANGE_INPUT_DESCRIPTION_DISCUSSION_UPDATE:
      return {
        ...state,
        inputValueDiscussionDescriptionUpdate: action.inputValue,
      };
    case CHANGE_INPUT_DESCRIPTION_COMMENTS:
      return {
        ...state,
        inputValueCommentDescription: action.inputValue,
      };
    case CHANGE_INPUT_IMAGE_COMMENTS:
      return {
        ...state,
        inputValueCommentImage: action.inputValue,
      };
    case CHANGE_INPUT_DESCRIPTION_COMMENTS_UPDATE:
      return {
        ...state,
        inputValueCommentDescriptionUpdate: action.inputValue,
      };
    // ---------- CHANGE VALUE USER ----------
    case CHANGE_INPUT_USER_EMAIL:
      return {
        ...state,
        inputValueUserEmail: action.inputValue,
      };
    case CHANGE_INPUT_USER_PASSWORD:
      return {
        ...state,
        inputValueUserPassword: action.inputValue,
      };
    case CHANGE_INPUT_USER_NAME:
      return {
        ...state,
        inputValueUserName: action.inputValue,
      };
    case CHANGE_INPUT_USER_LASTNAME:
      return {
        ...state,
        inputValueUserLastname: action.inputValue,
      };
    case CHANGE_INPUT_USER_PSEUDO:
      return {
        ...state,
        inputValueUserPseudo: action.inputValue,
      };
    // ------------- UPDATE VALUE USER ------------
    case MODAL_CHANGE_VISIBLE_USER:
      return {
        ...state,
        modalFormAddIcon: {
          visible: true,
        },
      };
    case MODAL_ON_OK_USER:
      return {
        ...state,
        modalFormAddIcon: {
          visible: false,
          confirmLoading: true,
        },
      };
    case MODAL_ON_CANCEL_USER:
      return {
        ...state,
        modalFormAddIcon: {
          visible: false,
        },
      };
    case SET_TIMEOUT_STATE_USER:
      return {
        ...state,
        modalFormAddIcon: {
          visible: false,
          confirmLoading: false,
        },
      };
    case CHANGE_INPUT_UPDATE_ICON:
      return {
        ...state,
        inputValueIcon: action.inputValue,
      };
    case CHANGE_INPUT_UPDATE_PSEUDO:
      return {
        ...state,
        inputValuePseudo: action.inputValue,
      };
    case CHANGE_INPUT_UPDATE_MAIL:
      return {
        ...state,
        inputValueMail: action.inputValue,
      };
    case CHANGE_INPUT_UPDATE_DESCRIPTION:
      return {
        ...state,
        inputValueDescription: action.inputValue,
      };
    case CHANGE_INPUT_UPDATE_PASSWORD:
      return {
        ...state,
        inputValuePassword: action.inputValue,
      };
    // --------------- MODAL USER ------------------
    default:
      return state;
  }
};

// ---------------------------------------------------------------------------------
// Action Creators

// --------- MODAL -------------------------
// Modal d'ajout de Topic
export const modalChangeVisible = () => ({
  type: MODAL_CHANGE_VISIBLE,
});
export const modalOnOkModal = () => ({
  type: MODAL_ON_OK,
});
export const modalOnCancel = () => ({
  type: MODAL_ON_CANCEL,
});
export const setTimeoutState = () => ({
  type: SET_TIMEOUT_STATE,
});
export const modalChangeVisibleMobile = () => ({
  type: MODAL_CHANGE_VISIBLE_MOBILE,
});
export const modalOnOkModalMobile = () => ({
  type: MODAL_ON_OK_MOBILE,
});
export const modalOnCancelMobile = () => ({
  type: MODAL_ON_CANCEL_MOBILE,
});
export const setTimeoutStateMobile = () => ({
  type: SET_TIMEOUT_STATE_MOBILE,
});

// Modal d'ajout de Discussion
export const modalChangeVisibleDiscussion = () => ({
  type: MODAL_CHANGE_VISIBLE_DISCUSSION,
});
export const modalOnOkModalDiscussion = () => ({
  type: MODAL_ON_OK_DISCUSSION,
});
export const modalOnCancelDiscussion = () => ({
  type: MODAL_ON_CANCEL_DISCUSSION,
});
export const setTimeoutStateDiscussion = () => ({
  type: SET_TIMEOUT_STATE_DISCUSSION,
});
export const modalChangeVisibleMobileDiscussion = () => ({
  type: MODAL_CHANGE_VISIBLE_MOBILE_DISCUSSION,
});
export const modalOnOkModalMobileDiscussion = () => ({
  type: MODAL_ON_OK_MOBILE_DISCUSSION,
});
export const modalOnCancelMobileDiscussion = () => ({
  type: MODAL_ON_CANCEL_MOBILE_DISCUSSION,
});
export const setTimeoutStateMobileDiscussion = () => ({
  type: SET_TIMEOUT_STATE_MOBILE_DISCUSSION,
});

// Update Discussion
export const modalChangeVisibleDiscussionUpdate = () => ({
  type: MODAL_CHANGE_VISIBLE_DISCUSSION_UPDATE,
});
export const modalOnOkModalDiscussionUpdate = () => ({
  type: MODAL_ON_OK_DISCUSSION_UPDATE,
});
export const modalOnCancelDiscussionUpdate = () => ({
  type: MODAL_ON_CANCEL_DISCUSSION_UPDATE,
});
export const setTimeoutStateDiscussionUpdate = () => ({
  type: SET_TIMEOUT_STATE_DISCUSSION_UPDATE,
});

export const modalChangeVisibleCommentUpdate = () => ({
  type: MODAL_CHANGE_VISIBLE_COMMENT_UPDATE,
});
export const modalOnOkModalCommentUpdate = () => ({
  type: MODAL_ON_OK_COMMENT_UPDATE,
});
export const modalOnCancelCommentUpdate = () => ({
  type: MODAL_ON_CANCEL_COMMENT_UPDATE,
});
export const setTimeoutStateCommentUpdate = () => ({
  type: SET_TIMEOUT_STATE_COMMENT_UPDATE,
});

// Input Modal
export const changeInputDescriptionPost = inputValue => ({
  type: CHANGE_INPUT_DESCRIPTION_POST,
  inputValue,
});

export const changeInputDescriptionImage = inputValue => ({
  type: CHANGE_INPUT_DESCRIPTION_IMAGE,
  inputValue,
});

export const changeInputDescriptionDiscussion = inputValue => ({
  type: CHANGE_INPUT_DESCRIPTION_DISCUSSION,
  inputValue,
});

export const changeInputImageDiscussion = inputValue => ({
  type: CHANGE_INPUT_IMAGE_DISCUSSION,
  inputValue,
});

export const changeInputDescriptionDiscussionUpdate = inputValue => ({
  type: CHANGE_INPUT_DESCRIPTION_DISCUSSION_UPDATE,
  inputValue,
});

export const changeInputDescriptionComment = inputValue => ({
  type: CHANGE_INPUT_DESCRIPTION_COMMENTS,
  inputValue,
});

export const changeInputDescriptionCommentUpdate = inputValue => ({
  type: CHANGE_INPUT_DESCRIPTION_COMMENTS_UPDATE,
  inputValue,
});

export const changeInputImageComment = inputValue => ({
  type: CHANGE_INPUT_IMAGE_COMMENTS,
  inputValue,
});

export const changeInputUserEmail = inputValue => ({
  type: CHANGE_INPUT_USER_EMAIL,
  inputValue,
});

export const changeInputUserPassword = inputValue => ({
  type: CHANGE_INPUT_USER_PASSWORD,
  inputValue,
});

export const changeInputUserName = inputValue => ({
  type: CHANGE_INPUT_USER_NAME,
  inputValue,
});

export const changeInputUserLastname = inputValue => ({
  type: CHANGE_INPUT_USER_LASTNAME,
  inputValue,
});

export const changeInputUserPseudo = inputValue => ({
  type: CHANGE_INPUT_USER_PSEUDO,
  inputValue,
});

export const changeInputUpdateIcon = inputValue => ({
  type: CHANGE_INPUT_UPDATE_ICON,
  inputValue,
});

export const changeInputUpdatePseudo = inputValue => ({
  type: CHANGE_INPUT_UPDATE_PSEUDO,
  inputValue,
});

export const changeInputUpdateMail = inputValue => ({
  type: CHANGE_INPUT_UPDATE_MAIL,
  inputValue,
});

export const changeInputUpdateDescription = inputValue => ({
  type: CHANGE_INPUT_UPDATE_DESCRIPTION,
  inputValue,
});

export const changeInputUpdatePassword = inputValue => ({
  type: CHANGE_INPUT_UPDATE_PASSWORD,
  inputValue,
});

export const modalChangeVisibleUser = () => ({
  type: MODAL_CHANGE_VISIBLE_USER,
});
export const modalOnOkModalUser = () => ({
  type: MODAL_ON_OK_USER,
});
export const modalOnCancelUser = () => ({
  type: MODAL_ON_CANCEL_USER,
});
export const setTimeoutStateUser = () => ({
  type: SET_TIMEOUT_STATE_USER,
});

// ----------- AXIOS -------------------
export const fetchPosts = () => ({
  type: FETCH_POSTS,
});

export const receivePosts = postData => ({
  type: RECEIVE_POSTS,
  postData,
});

export const changePostStatusTextDesktop = () => ({
  type: CHANGE_POST_TEXT_STATUS_DESKTOP,
});
export const changePostStatusComments = () => ({
  type: CHANGE_POST_STATUS_COMMENTS,
});

// ------------ DRAWER ----------------------
export const drawerChangeVisible = () => ({
  type: DRAWER_CHANGE_VISIBLE,
});
export const closeDrawer = () => ({
  type: CLOSE_DRAWER,
});

export const changeView = () => ({
  type: CHANGE_VIEW,
});

// ------------ DRAWER MENU BURGER ----------------------
export const drawerBurgerChangeVisible = () => ({
  type: DRAWER_BURGER_CHANGE_VISIBLE,
});
export const closeDrawerBurger = () => ({
  type: CLOSE_DRAWER_BURGER,
});

export const changeViewMenuBurger = () => ({
  type: CHANGE_VIEW_DRAWER_BURGER,
});


// ------------ USER -----------------------
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

// == Selectors


// == Export
export default reducer;
