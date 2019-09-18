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

      {id !== undefined && (
        <CreateComment
          currId={id}
          postTitle={title}
          postContent={content}
          postAuthor={author}
          postPublished={published}
          postComments={comments}
        ></CreateComment>
      )}
      <div className="container">
        <p>Comments</p>
        {comments !== undefined && <Comments comments={comments}></Comments>}
      </div>
    </Fragment>
  );
};

export default Post;
