import {
  SEARCH_POSTS,
  GET_POST,
  GET_POSTS,
  CLEAR_SEARCH,
  CREATE_COMMENT,
  CREATE_POST
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case CREATE_POST:
      return {
        ...state,
        posts: action.payload
      };
  }
};
