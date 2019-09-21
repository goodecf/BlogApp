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
  SET_SEARCH,
  SET_LOADING
  // CLEAR_SEARCH,
} from "../types";

const PostState = props => {
  const initialState = {
    posts: [],
    post: {},
    search: "",
    loading: false
  };

  const [state, dispatch] = useReducer(PostReducer, initialState);

  // Search posts
  const searchPosts = async text => {
    setLoading();
    const res = await axios.get(
      `my-json-server.typicode.com/goodecf/BlogApp/posts/?q=${text}`
    );

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
    setLoading();
    const res = await axios.get(
      `my-json-server.typicode.com/goodecf/BlogApp/posts/${id}`
    );
    dispatch({
      type: GET_POST,
      payload: res.data
    });
  };

  // Get posts
  const getPosts = async text => {
    setLoading();
    const res = await axios.get(
      `my-json-server.typicode.com/goodecf/BlogApp/posts/`
    );

    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  };

  // Clear search

  // Create comment
  const createComment = async newPost => {
    const res = await axios.put(
      `my-json-server.typicode.com/goodecf/BlogApp/posts/${newPost.id}`,
      {
        title: newPost.title,
        author: newPost.author,
        published: newPost.published,
        comments: newPost.comments,
        content: newPost.content,
        id: newPost.id
      }
    );

    dispatch({
      type: CREATE_COMMENT,
      payload: res.data
    });
  };

  // Create post
  const createPost = async post => {
    const res = await axios.post(
      "my-json-server.typicode.com/goodecf/BlogApp/posts/",
      {
        title: post.title,
        author: post.name,
        published: post.published,
        comments: [],
        content: post.content,
        id: post.id
      }
    );

    dispatch({
      type: CREATE_POST,
      payload: res.data
    });
  };

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        post: state.post,
        search: state.search,
        loading: state.loading,
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
