import React from "react";
import Navbar from "../layout/Navbar";
import Posts from "../posts/Posts";

const Home = posts => {
  return (
    <div>
      <Navbar posts={posts}></Navbar>
      <Posts posts={posts}></Posts>
    </div>
  );
};

export default Home;
