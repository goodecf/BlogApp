import React from "react";
import CreatePost from "../posts/CreatePost";
import Posts from "../posts/Posts";
const uuidv4 = require("uuid/v4");

const Home = () => {
  const posts = [
    {
      title: "Hey",
      author: "John Doe",
      published: "Sept 15 2019",
      comments: [
        {
          name: "John",
          content: "Good stuff!"
        },
        {
          name: "John",
          content: "Good stuff!!"
        },
        {
          name: "John",
          content: "Good stuff!"
        },
        {
          name: "John",
          content: "Good stuff!"
        }
      ],
      content: "Today I walked my dog and it was fun.",
      id: uuidv4()
    },
    {
      title: "What's up?",
      author: "Sarah",
      published: "Aug 20 2019",
      comments: [],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quisquam nisi nemo perspiciatis, at, inventore quae culpa facere, nam incidunt illum. Laboriosam voluptatibus ipsa nulla cumque cum enim adipisci dolores veritatis, debitis vitae consequatur rem unde esse neque quibusdam, eaque molestiae delectus voluptas maiores sint accusantium! Perferendis exercitationem corrupti aut?",
      id: uuidv4()
    },
    {
      title: "Time to go",
      author: "billbill10",
      published: "June 15 2018",
      comments: [],
      content: "In today's age of technology life it pretty cool.",
      id: uuidv4()
    }
  ];

  return (
    <div>
      <CreatePost></CreatePost>
      <Posts posts={posts}></Posts>
    </div>
  );
};

export default Home;
