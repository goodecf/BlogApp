import React, { useState, useContext } from "react";
import ArticleContext from "../context/posts/postContext";

const Search = () => {
  const [text, setText] = useState("");

  const articleContext = useContext(ArticleContext);
  const input = e => {
    setText(e.target.value);
  };

  const submit = e => {
    e.preventDefault();
    if (text !== "") {
      articleContext.searchPosts(text);
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
