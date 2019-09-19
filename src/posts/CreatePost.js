import React from "react";
import { Link } from "react-router-dom";

const CreatePost = () => {
  return (
    <div>
      <Link to="/submit">
        <input
          type="submit"
          value="Create Blog Post"
          className="all-center btn bg-dark"
        />
      </Link>
    </div>
  );
};

export default CreatePost;
