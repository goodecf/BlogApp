import React, { useReducer } from "react";
import PostContext from "./postContext";
import PostReducer from "./postReducer";
import axios from "axios";

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
  const searchPosts = async text => {
    const res = await axios.get(
      `http://my-json-server.typicode.com/goodecf/BlogApp/posts/?q=${text}`
    );

    dispatch({
      type: SEARCH_POSTS,
      payload: res.data.items
    });
  };
  // Get post

  // Get posts
  const getPosts = async text => {
    const res = await axios.get(
      `http://my-json-server.typicode.com/goodecf/BlogApp/posts/`
    );

    dispatch({
      type: GET_POSTS,
      payload: res.data.items
    });
  };

  // Clear search

  // Create comment

  // Create post
  const createPost = async text => {
    const res = await axios.post(
      `http://my-json-server.typicode.com/goodecf/BlogApp/posts/${JSON.stringify(
        text
      )}`
    );

    dispatch({
      type: CREATE_POST,
      payload: res.data
    });
  };

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        user: state.user,
        searchPosts,
        createPost,
        getPosts
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;