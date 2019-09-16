import React, { useContext } from "react";
import PostThumbnail from "./PostThumbnail";
import PostContext from "../context/posts/postContext";

const Posts = () => {
  const postContext = useContext(PostContext);
  // Get posts from post state
  const posts = postContext.getPosts();
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
