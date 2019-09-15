import React from "react";

const Post = ({ title, author, published, comments, id }) => {
  return (
    <div>
      <h1>Hi</h1>
      <h1>{title}</h1>
      <h1>{author}</h1>
      <h1>{published}</h1>
      <h1>{comments}</h1>
      <h1>{id}</h1>
    </div>
  );
};

export default Post;
