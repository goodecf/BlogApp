import React, { useContext, useEffect } from "react";
import PostThumbnail from "./PostThumbnail";
import PostContext from "../context/posts/postContext";

const Posts = () => {
  const postContext = useContext(PostContext);
  const { getPosts, searchPosts, loading } = postContext;

  // Get posts from post state
  useEffect(() => {
    if (postContext.search !== "") {
      searchPosts(postContext.search);
    } else {
      getPosts();
    }
    // eslint-disable-next-line
  }, []);

  const { posts } = postContext;

  if (loading) {
    return <></>;
  }

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
