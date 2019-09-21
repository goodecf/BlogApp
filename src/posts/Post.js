import React, { useContext, useEffect, Fragment } from "react";
import CreateComment from "../comments/CreateComment";
import PostContext from "../context/posts/postContext";
import Comments from "../comments/Comments";

const Post = ({ match }) => {
  const postContext = useContext(PostContext);
  const { post, getPost, loading } = postContext;

  useEffect(() => {
    getPost(match.params.id);
    // eslint-disable-next-line
  }, []);

  const { title, content, author, published, comments, id } = post;
  if (loading) return <> </>;
  return (
    <Fragment>
      <div className="container">
        <h5>
          Posted by {author} on {published}
        </h5>
        <h3>{title}</h3>
        <h4>{content}</h4>
      </div>

      {id !== undefined && comments !== undefined && (
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
        {comments !== undefined && (
          <Comments comments={comments} key={id}></Comments>
        )}
      </div>
    </Fragment>
  );
};

export default Post;
