import React, { useState, useContext } from "react";
import PostContext from "../context/posts/postContext";
import uuidv4 from "uuidv4";

const Submit = () => {
  const postContext = useContext(PostContext);
  const id = uuidv4();
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
    e.preventDefault();

    if (title !== "" && name !== "" && content !== "") {
      postContext.createPost([{ title, name, content, id }]);
    }
  };
  return (
    <div className="all-center bg-light">
      <form onSubmit={submit} className="form">
        <div className="container">
          <input
            type="text"
            placeholder="Enter your title here"
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
        <input
          type="submit"
          value="Post"
          className="btn bg-dark"
          onSubmit={submit}
        />
      </form>
    </div>
  );
};

export default Submit;
