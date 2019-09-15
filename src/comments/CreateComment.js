import React from "react";

const CreateComment = () => {
  return (
    <div className="container">
      <input type="text" placeholder="Enter your name"></input>
      <input type="text" placeholder="Enter your comment"></input>
      <input type="submit" value="Comment" />
    </div>
  );
};

export default CreateComment;
