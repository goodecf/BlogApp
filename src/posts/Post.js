import React, { useContext, useEffect } from "react";
import CreateComment from "../comments/CreateComment";
import PostContext from "../context/posts/postContext";

const Post = ({ id, match }) => {
  const postContext = useContext(PostContext);

  useEffect(() => {
    // console.log({ id });
    postContext.getPost(match.params.id);
  }, []);

  const { post } = postContext;
  console.log(post);

  const { title, author, published, comments, content } = post;

  return (
    <div>
      <div className="container">
        <h1>{title}</h1>
        <h1>{author}</h1>
        <h1>{published}</h1>
        <h1>{content}</h1>
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
