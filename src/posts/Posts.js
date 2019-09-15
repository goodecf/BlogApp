import React from "react";
import Post from "./Post";

const Posts = posts => {
  return (
    <div>
      {posts.map(post => (
        <Post name={post.name}></Post>
      ))}
    </div>
  );
};

export default Posts;
