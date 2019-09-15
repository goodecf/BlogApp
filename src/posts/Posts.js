import React from "react";
import PostThumbnail from "./PostThumbnail";

const Posts = ({ posts }) => {
  return (
    <div className="card">
      {posts.map(post => (
        <PostThumbnail
          title={post.title}
          author={post.author}
          published={post.published}
          comments={post.comments}
          key={post.id}
          id={post.id}
        ></PostThumbnail>
      ))}
    </div>
  );
};

export default Posts;
