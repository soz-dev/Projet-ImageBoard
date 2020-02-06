import axios from 'axios';

import {
  FETCH_POSTS,
  receivePosts,
} from 'src/store/reducer';

// --------------------------------------------------------------------------------------
// MiddleWare SocketMiddleWare pour envoyer les requête server et les gérer
const axiosMiddleware = store => next => (action) => {
  switch (action.type) {
    //--------------------------------------------------
    case FETCH_POSTS:
      axios.get('http://localhost:3000/api/posts/')
        .then((response) => {
          const { data: posts } = response;
          store.dispatch(receivePosts(posts));
        })
        .catch(() => {
          console.log('Une erreur s\'est produite');
        });
      break;
    default:
      next(action);
  }
};

// --------------------------------------------------------------------------------------
export default axiosMiddleware;
