import React from "react";

const Submit = () => {
  return (
    <div className="all-center bg-light">
      <div className="container">
        <input type="text" placeholder="Enter your title here" />
        <input type="text" placeholder="Enter your name here" />
      </div>
      <textarea
        name=""
        id=""
        cols="5"
        rows="5"
        placeholder="Enter your blog post here"
      ></textarea>
      <input type="submit" value="Post" className="btn bg-dark" />
    </div>
  );
};

export default Submit;
