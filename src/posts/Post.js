import React, { useContext, useEffect, Fragment } from "react";
import CreateComment from "../comments/CreateComment";
import PostContext from "../context/posts/postContext";
import Comments from "../comments/Comments";

const Post = ({ match }) => {
  const postContext = useContext(PostContext);
  const { post, getPost } = postContext;

  useEffect(() => {
    getPost(match.params.id);
    // eslint-disable-next-line
  }, []);

  const { title, content, author, published, comments, id } = post;

  return (
    <Fragment>
      <div className="container">
        <p>
          Posted by {author} on {published}
        </p>
        <h5>{title}</h5>
        <h4>{content}</h4>
      </div>

      <CreateComment></CreateComment>
      <div className="container">
        <p>Comments</p>
        {/* {comments.map(comment => (
          <h1>{comment.name}</h1>
        ))} */}
        <Comments comments={comments}></Comments>
      </div>
    </Fragment>
  );
};

export default Post;
