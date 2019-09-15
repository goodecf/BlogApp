import React from "react";
import CreateComment from "../comments/CreateComment";

const Post = ({ title, author, published, comments, id }) => {
  return (
    <div>
      <div className="container">
        <h1>{title}</h1>
        <h1>{author}</h1>
        <h1>{published}</h1>
        <h1>{comments}</h1>
        <h1>{id}</h1>
      </div>

      <CreateComment></CreateComment>
      <div className="container">
        <p>Comments</p>
      </div>
    </div>
  );
};

export default Post;
