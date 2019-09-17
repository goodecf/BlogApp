import React, { useContext, useEffect } from "react";
import CreateComment from "../comments/CreateComment";
import PostContext from "../context/posts/postContext";
import Comments from "../comments/Comments";

const Post = ({ id, match }) => {
  const postContext = useContext(PostContext);

  useEffect(() => {
    postContext.getPost(match.params.id);
  }, []);

  const { post } = postContext;

  return (
    <div>
      <div className="container">
        <p>
          Posted by {post.author} on {post.published}
        </p>
        <h5>{post.title}</h5>
        <h4>{post.content}</h4>
        <h1>{id}</h1>
      </div>

      <CreateComment></CreateComment>
      <div className="container">
        <p>Comments</p>
        <Comments comments={post.comments}></Comments>
      </div>
    </div>
  );
};

export default Post;
