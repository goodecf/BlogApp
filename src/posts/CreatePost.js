import React from "react";
import { Link } from "react-router-dom";

const CreatePost = () => {
  return (
    <div>
      <Link to="/submit">
        <input type="submit" value="Create Post" className="all-center" />
      </Link>
    </div>
  );
};

export default CreatePost;
