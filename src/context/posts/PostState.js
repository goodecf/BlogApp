import React, { useReducer } from "react";
import PostContext from "./postContext";
import PostReducer from "./postReducer";
import axios from "axios";

import {
  SEARCH_POSTS,
  GET_POST,
  GET_POSTS,
  CREATE_POST,
  CREATE_COMMENT,
  SET_SEARCH
  // CLEAR_SEARCH,
} from "../types";

const PostState = props => {
  const initialState = {
    posts: [],
    post: {},
    search: ""
  };

  const [state, dispatch] = useReducer(PostReducer, initialState);

  // Search posts
  const searchPosts = async text => {
    const res = await axios.get(`http://localhost:5000/posts/?q=${text}`);

    dispatch({
      type: SEARCH_POSTS,
      payload: res.data
    });
  };

  const setSearch = text => {
    const res = text;
    dispatch({
      type: SET_SEARCH,
      payload: res
    });
  };

  // Get post
  const getPost = async id => {
    const res = await axios.get(`http://localhost:5000/posts/${id}`);
    dispatch({
      type: GET_POST,
      payload: res.data
    });
  };

  // Get posts
  const getPosts = async text => {
    const res = await axios.get(`http://localhost:5000/posts/`);

    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  };

  // Clear search

  // Create comment
  const createComment = async newPost => {
    const res = await axios.put(`http://localhost:5000/posts/${newPost.id}`, {
      title: newPost.title,
      author: newPost.author,
      published: newPost.published,
      comments: newPost.comments,
      content: newPost.content,
      id: newPost.id
    });

    dispatch({
      type: CREATE_COMMENT,
      payload: res.data
    });
  };

  // Create post
  const createPost = async post => {
    const res = await axios.post("/posts/", {
      title: post.title,
      author: post.name,
      published: post.published,
      comments: [],
      content: post.content,
      id: post.id
    });

    dispatch({
      type: CREATE_POST,
      payload: res.data
    });
  };

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        post: state.post,
        search: state.search,
        searchPosts,
        createPost,
        getPosts,
        getPost,
        createComment,
        setSearch
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
