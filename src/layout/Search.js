import React, { useState, useContext } from "react";
import PostContext from "../context/posts/postContext";

const Search = () => {
  const [text, setText] = useState("");

  const postContext = useContext(PostContext);
  const input = e => {
    setText(e.target.value);
  };

  const submit = e => {
    e.preventDefault();
    if (text !== "") {
      postContext.searchPosts(text);
    } else {
      postContext.getPosts();
    }
  };
  return (
    <div>
      <form onSubmit={submit} className="form">
        <input
          type="text"
          placeholder="Search blogs..."
          onChange={input}
          onSubmit={submit}
        ></input>
      </form>
    </div>
  );
};

export default Search;
