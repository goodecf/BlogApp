import React, { useContext, useEffect } from "react";
import PostThumbnail from "./PostThumbnail";
import PostContext from "../context/posts/postContext";

const Posts = () => {
  const postContext = useContext(PostContext);

  // Get posts from post state
  useEffect(() => {
    postContext.getPosts();
  }, []);

  const { posts } = postContext;

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
