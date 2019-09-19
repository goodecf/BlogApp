import React, { useState, useContext } from "react";
import PostContext from "../context/posts/postContext";
import uuidv4 from "uuidv4";
import { Link } from "react-router-dom";

const Submit = () => {
  const postContext = useContext(PostContext);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const inputTitle = e => {
    setTitle(e.target.value);
  };

  const inputName = e => {
    setName(e.target.value);
  };

  const inputContent = e => {
    setContent(e.target.value);
  };

  const submit = e => {
    // e.preventDefault();

    if (title !== "" && name !== "" && content !== "") {
      const newPost = {
        title,
        name,
        published:
          new Date().getDay() +
          "/" +
          new Date().getMonth() +
          "/" +
          new Date().getFullYear(),
        comments: [],
        content,
        id: uuidv4()
      };
      postContext.createPost(newPost);
    }
  };
  return (
    <div className="all-center bg-light">
      <form onSubmit={submit} className="form">
        <div className="container">
          <input
            type="text"
            placeholder="Enter a title here"
            onChange={inputTitle}
          />
          <input
            type="text"
            placeholder="Enter your name here"
            onChange={inputName}
          />
        </div>
        <textarea
          name=""
          id=""
          cols="5"
          rows="5"
          placeholder="Enter your blog post here"
          onChange={inputContent}
        ></textarea>
        <Link to="/" onClick={submit}>
          <input
            type="submit"
            // onSubmit={submit}
            value="Post"
            className="btn bg-dark"
          />
        </Link>
      </form>
    </div>
  );
};

export default Submit;
