import {
  SEARCH_POSTS,
  GET_POST,
  GET_POSTS,
  // CLEAR_SEARCH,
  CREATE_COMMENT,
  CREATE_POST,
  SET_SEARCH,
  SET_LOADING
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loading: false
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      };
    case CREATE_COMMENT:
      return {
        ...state,
        post: action.payload,
        loading: false
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
