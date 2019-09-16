import React from "react";
import CreatePost from "../posts/CreatePost";
import Posts from "../posts/Posts";

const Home = () => {
  return (
    <div>
      <CreatePost></CreatePost>
      <Posts></Posts>
    </div>
  );
};

export default Home;
