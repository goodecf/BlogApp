import React, { useReducer } from "react";
import PostContext from "./postContext";
import PostReducer from "./postReducer";
import {
  SEARCH_POSTS,
  GET_POST,
  GET_POSTS,
  CLEAR_SEARCH,
  CREATE_COMMENT,
  CREATE_POST
} from "../types";

const PostState = props => {
  const initialState = {
    posts: [],
    post: {}
  };

  const [state, dispatch] = useReducer(PostReducer, initialState);

  // Search posts

  // Get post

  // Get posts

  // Clear search

  // Create comment

  // Create post

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        user: state.user
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
