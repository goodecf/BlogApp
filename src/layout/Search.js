import React, { useContext } from "react";
import PostContext from "../context/posts/postContext";

const Search = () => {
  const postContext = useContext(PostContext);

  const input = e => {
    postContext.setSearch(e.target.value);
  };

  const submit = e => {
    e.preventDefault();
    if (postContext.search !== "") {
      postContext.searchPosts(postContext.search);
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
